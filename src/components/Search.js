import React, {useEffect, useState} from 'react';
import Spinner from './SpinnerLoader';
import List from './List';
import { useLocation } from 'react-router-dom';
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const Search = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();

    const handleSearch = async (cityName) => {
        setLoading(true);
        try {
            const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${cityName}`);
            const places = await response.json();

            if (places.length === 0) {
                setError('No encontramos la ciudad');
                setLoading(false);
                return;
            }

            const { lat, long } = places[0];
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`);
            const { list: forecast } = await weatherResponse.json();

            const finalTemperaturesByDays = forecast.reduce((acc, { main, dt_txt: dayWithHours }) => {
                const day = dayWithHours.substring(0, 10);
                if (!acc.hasOwnProperty(day)) {
                    acc[day] = { min: Infinity, max: -Infinity };
                }
                acc[day].min = Math.round(Math.min(acc[day].min, main.temp_min ?? main.temp));
                acc[day].max = Math.round(Math.max(acc[day].max, main.temp_max ?? main.temp));
                return acc;
            }, {});
            setWeather(finalTemperaturesByDays);
            setError(null);
        } catch (err) {
            setError('error fetch');
        } finally {
        setLoading(false);
    }
    };

    const capitalizeFirstLetter = (string) => {
        return string.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    };

    const convertToHumanDate = (dateString, isToday) => {
        if (isToday) return 'Hoy';
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('es-MX', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return capitalizeFirstLetter(formattedDate);
    }

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(location.search);
            const cityParam = params.get('city');
            if (cityParam) {
                setCity(cityParam);
                try {
                    await handleSearch(cityParam);
                } catch (error) {
                    console.error('Error handling search:', error);
                }
            }
        };
        fetchData().then(r => console.log('fetchData', r));
    }, [location]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg w-full">
            <h1 className="flex justify-center text-2xl font-bold mb-4 text-center">
                <img src={`${process.env.PUBLIC_URL}/logo-32x32.png`} alt={'logo'}/>eservaCLIMA
            </h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Introduce una ciudad"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>
            <button
                disabled={!city}
                onClick={() => handleSearch(city)}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                Dame el clima !!!
            </button>
            {loading && <div className="text-center mt-4 cold-blue"><Spinner/></div>}
                {error && <div className="mt-4 text-red-500">{error}</div>}
            {weather && (
                <List weather={weather} convertToHumanDate={convertToHumanDate} />
            )}
        </div>
        </div>
    );
};

export default Search;