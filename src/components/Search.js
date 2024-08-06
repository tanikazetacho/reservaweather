import React, { useState } from 'react';

const Search = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://search.reservamos.mx/api/v2/places?q=${city}`);
            const places = await response.json();
            if (places.length === 0) {
                setError('No encontramos la ciudad');
                return;
            }
            const { lat, long } = places[0];
            const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=0eebd1fcf852d29ca0340c5c451d4c9a&units=metric`);
            const weatherData = await weatherResponse.json();
            setWeather(weatherData);
            setError(null);
        } catch (err) {
            setError('error fetch');
        }
    };

    const convertTimestampToDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('es-MX', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };

    const getUniqueDaysForecast = (weatherList) => {
        const uniqueDays = [];
        const result = [];

        for (const forecast of weatherList) {
            const date = new Date(forecast.dt * 1000);
            const day = date.getDate();

            if (!uniqueDays.includes(day)) {
                uniqueDays.push(day);
                result.push(forecast);
            }

            if (result.length >= 6) {
                break;
            }
        }

        return result;
    };

    const reservaDoomie = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1722978000,
                "main": {
                    "temp": 25.52,
                    "feels_like": 25.69,
                    "temp_min": 25.52,
                    "temp_max": 25.52,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 815,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 75
                },
                "wind": {
                    "speed": 1.78,
                    "deg": 1,
                    "gust": 1.63
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 3.04
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-06 21:00:00"
            },
            {
                "dt": 1722988800,
                "main": {
                    "temp": 24.79,
                    "feels_like": 25.02,
                    "temp_min": 23.32,
                    "temp_max": 24.79,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 815,
                    "humidity": 65,
                    "temp_kf": 1.47
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.22,
                    "deg": 95,
                    "gust": 1.71
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 3.7
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-07 00:00:00"
            },
            {
                "dt": 1722999600,
                "main": {
                    "temp": 20.93,
                    "feels_like": 21.14,
                    "temp_min": 18.63,
                    "temp_max": 20.93,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 816,
                    "humidity": 79,
                    "temp_kf": 2.3
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 2.01,
                    "deg": 32,
                    "gust": 2.01
                },
                "visibility": 10000,
                "pop": 0.98,
                "rain": {
                    "3h": 0.95
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-07 03:00:00"
            },
            {
                "dt": 1723010400,
                "main": {
                    "temp": 17.33,
                    "feels_like": 17.49,
                    "temp_min": 17.33,
                    "temp_max": 17.33,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 817,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.91,
                    "deg": 355,
                    "gust": 1.93
                },
                "visibility": 10000,
                "pop": 0.84,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-07 06:00:00"
            },
            {
                "dt": 1723021200,
                "main": {
                    "temp": 16.47,
                    "feels_like": 16.55,
                    "temp_min": 16.47,
                    "temp_max": 16.47,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 815,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.12,
                    "deg": 337,
                    "gust": 2.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-07 09:00:00"
            },
            {
                "dt": 1723032000,
                "main": {
                    "temp": 15.89,
                    "feels_like": 15.91,
                    "temp_min": 15.89,
                    "temp_max": 15.89,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 815,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.48,
                    "deg": 331,
                    "gust": 2.78
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-07 12:00:00"
            },
            {
                "dt": 1723042800,
                "main": {
                    "temp": 21.32,
                    "feels_like": 21.39,
                    "temp_min": 21.32,
                    "temp_max": 21.32,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 816,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 1.76,
                    "deg": 324,
                    "gust": 2.22
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-07 15:00:00"
            },
            {
                "dt": 1723053600,
                "main": {
                    "temp": 26.22,
                    "feels_like": 26.22,
                    "temp_min": 26.22,
                    "temp_max": 26.22,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 815,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 0.88,
                    "deg": 201,
                    "gust": 1.96
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-07 18:00:00"
            },
            {
                "dt": 1723064400,
                "main": {
                    "temp": 26.4,
                    "feels_like": 26.4,
                    "temp_min": 26.4,
                    "temp_max": 26.4,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 813,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 58
                },
                "wind": {
                    "speed": 1.28,
                    "deg": 101,
                    "gust": 1.73
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.21
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-07 21:00:00"
            },
            {
                "dt": 1723075200,
                "main": {
                    "temp": 23.62,
                    "feels_like": 23.89,
                    "temp_min": 23.62,
                    "temp_max": 23.62,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 812,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 1.55,
                    "deg": 67,
                    "gust": 1.41
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.81
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-08 00:00:00"
            },
            {
                "dt": 1723086000,
                "main": {
                    "temp": 18.58,
                    "feels_like": 18.77,
                    "temp_min": 18.58,
                    "temp_max": 18.58,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 813,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 49
                },
                "wind": {
                    "speed": 1,
                    "deg": 46,
                    "gust": 1.08
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 2.53
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-08 03:00:00"
            },
            {
                "dt": 1723096800,
                "main": {
                    "temp": 17.54,
                    "feels_like": 17.67,
                    "temp_min": 17.54,
                    "temp_max": 17.54,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 813,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 28
                },
                "wind": {
                    "speed": 0.96,
                    "deg": 8,
                    "gust": 1.08
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 0.34
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-08 06:00:00"
            },
            {
                "dt": 1723107600,
                "main": {
                    "temp": 16.79,
                    "feels_like": 16.85,
                    "temp_min": 16.79,
                    "temp_max": 16.79,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 812,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 1.16,
                    "deg": 342,
                    "gust": 1.2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-08 09:00:00"
            },
            {
                "dt": 1723118400,
                "main": {
                    "temp": 16.15,
                    "feels_like": 16.17,
                    "temp_min": 16.15,
                    "temp_max": 16.15,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 812,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 1.37,
                    "deg": 340,
                    "gust": 1.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-08 12:00:00"
            },
            {
                "dt": 1723129200,
                "main": {
                    "temp": 21.86,
                    "feels_like": 22.03,
                    "temp_min": 21.86,
                    "temp_max": 21.86,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 813,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 3
                },
                "wind": {
                    "speed": 0.64,
                    "deg": 319,
                    "gust": 1.02
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-08 15:00:00"
            },
            {
                "dt": 1723140000,
                "main": {
                    "temp": 26.38,
                    "feels_like": 26.38,
                    "temp_min": 26.38,
                    "temp_max": 26.38,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 812,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 6
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 166,
                    "gust": 2.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-08 18:00:00"
            },
            {
                "dt": 1723150800,
                "main": {
                    "temp": 26.96,
                    "feels_like": 27.44,
                    "temp_min": 26.96,
                    "temp_max": 26.96,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 811,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.14,
                    "deg": 133,
                    "gust": 2.81
                },
                "visibility": 10000,
                "pop": 0.35,
                "rain": {
                    "3h": 0.2
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-08 21:00:00"
            },
            {
                "dt": 1723161600,
                "main": {
                    "temp": 23.98,
                    "feels_like": 24.16,
                    "temp_min": 23.98,
                    "temp_max": 23.98,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 811,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 2.23,
                    "deg": 161,
                    "gust": 2.44
                },
                "visibility": 10000,
                "pop": 0.79,
                "rain": {
                    "3h": 0.63
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-09 00:00:00"
            },
            {
                "dt": 1723172400,
                "main": {
                    "temp": 18.91,
                    "feels_like": 18.97,
                    "temp_min": 18.91,
                    "temp_max": 18.91,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 812,
                    "humidity": 81,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 43
                },
                "wind": {
                    "speed": 1.17,
                    "deg": 78,
                    "gust": 1.38
                },
                "visibility": 10000,
                "pop": 0.24,
                "rain": {
                    "3h": 0.12
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-09 03:00:00"
            },
            {
                "dt": 1723183200,
                "main": {
                    "temp": 17.63,
                    "feels_like": 17.75,
                    "temp_min": 17.63,
                    "temp_max": 17.63,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 813,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 1.44,
                    "deg": 11,
                    "gust": 1.45
                },
                "visibility": 10000,
                "pop": 0.24,
                "rain": {
                    "3h": 0.18
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-09 06:00:00"
            },
            {
                "dt": 1723194000,
                "main": {
                    "temp": 16.78,
                    "feels_like": 16.84,
                    "temp_min": 16.78,
                    "temp_max": 16.78,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 812,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 27
                },
                "wind": {
                    "speed": 1.67,
                    "deg": 341,
                    "gust": 1.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-09 09:00:00"
            },
            {
                "dt": 1723204800,
                "main": {
                    "temp": 16.11,
                    "feels_like": 16.1,
                    "temp_min": 16.11,
                    "temp_max": 16.11,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 812,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 58
                },
                "wind": {
                    "speed": 1.99,
                    "deg": 343,
                    "gust": 2
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-09 12:00:00"
            },
            {
                "dt": 1723215600,
                "main": {
                    "temp": 21.94,
                    "feels_like": 21.91,
                    "temp_min": 21.94,
                    "temp_max": 21.94,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 814,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 84
                },
                "wind": {
                    "speed": 0.47,
                    "deg": 62,
                    "gust": 0.96
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-09 15:00:00"
            },
            {
                "dt": 1723226400,
                "main": {
                    "temp": 26.28,
                    "feels_like": 26.28,
                    "temp_min": 26.28,
                    "temp_max": 26.28,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 813,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 52
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 182,
                    "gust": 2.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-09 18:00:00"
            },
            {
                "dt": 1723237200,
                "main": {
                    "temp": 26.16,
                    "feels_like": 26.16,
                    "temp_min": 26.16,
                    "temp_max": 26.16,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 811,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 55
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 142,
                    "gust": 2.09
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-09 21:00:00"
            },
            {
                "dt": 1723248000,
                "main": {
                    "temp": 22.1,
                    "feels_like": 22.27,
                    "temp_min": 22.1,
                    "temp_max": 22.1,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 812,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 1.19,
                    "deg": 104,
                    "gust": 1.76
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.32
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-10 00:00:00"
            },
            {
                "dt": 1723258800,
                "main": {
                    "temp": 17.8,
                    "feels_like": 17.88,
                    "temp_min": 17.8,
                    "temp_max": 17.8,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 815,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 79
                },
                "wind": {
                    "speed": 2.21,
                    "deg": 39,
                    "gust": 2.1
                },
                "visibility": 10000,
                "pop": 0.69,
                "rain": {
                    "3h": 0.65
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 03:00:00"
            },
            {
                "dt": 1723269600,
                "main": {
                    "temp": 16.66,
                    "feels_like": 16.71,
                    "temp_min": 16.66,
                    "temp_max": 16.66,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 815,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 90
                },
                "wind": {
                    "speed": 1.82,
                    "deg": 3,
                    "gust": 1.99
                },
                "visibility": 10000,
                "pop": 0.47,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 06:00:00"
            },
            {
                "dt": 1723280400,
                "main": {
                    "temp": 15.83,
                    "feels_like": 15.82,
                    "temp_min": 15.83,
                    "temp_max": 15.83,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 814,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 2.19,
                    "deg": 341,
                    "gust": 2.32
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 09:00:00"
            },
            {
                "dt": 1723291200,
                "main": {
                    "temp": 15.46,
                    "feels_like": 15.46,
                    "temp_min": 15.46,
                    "temp_max": 15.46,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 815,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 95
                },
                "wind": {
                    "speed": 2.09,
                    "deg": 332,
                    "gust": 2.33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-10 12:00:00"
            },
            {
                "dt": 1723302000,
                "main": {
                    "temp": 19.06,
                    "feels_like": 19.11,
                    "temp_min": 19.06,
                    "temp_max": 19.06,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 816,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.77,
                    "deg": 335,
                    "gust": 2.31
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-10 15:00:00"
            },
            {
                "dt": 1723312800,
                "main": {
                    "temp": 23.07,
                    "feels_like": 23.1,
                    "temp_min": 23.07,
                    "temp_max": 23.07,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 815,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.01,
                    "deg": 19,
                    "gust": 2.35
                },
                "visibility": 10000,
                "pop": 0.21,
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-10 18:00:00"
            },
            {
                "dt": 1723323600,
                "main": {
                    "temp": 21.27,
                    "feels_like": 21.31,
                    "temp_min": 21.27,
                    "temp_max": 21.27,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 814,
                    "humidity": 71,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 94
                },
                "wind": {
                    "speed": 1.94,
                    "deg": 18,
                    "gust": 2.41
                },
                "visibility": 10000,
                "pop": 0.53,
                "rain": {
                    "3h": 0.37
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-10 21:00:00"
            },
            {
                "dt": 1723334400,
                "main": {
                    "temp": 20.57,
                    "feels_like": 20.77,
                    "temp_min": 20.57,
                    "temp_max": 20.57,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 814,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 1.11,
                    "deg": 27,
                    "gust": 2.14
                },
                "visibility": 10000,
                "pop": 0.47,
                "rain": {
                    "3h": 0.22
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 00:00:00"
            },
            {
                "dt": 1723345200,
                "main": {
                    "temp": 17.87,
                    "feels_like": 18.11,
                    "temp_min": 17.87,
                    "temp_max": 17.87,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 816,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.58,
                    "deg": 353,
                    "gust": 2.4
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.44
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 03:00:00"
            },
            {
                "dt": 1723356000,
                "main": {
                    "temp": 17.78,
                    "feels_like": 18.02,
                    "temp_min": 17.78,
                    "temp_max": 17.78,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 816,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.98,
                    "deg": 337,
                    "gust": 1.25
                },
                "visibility": 10000,
                "pop": 0.92,
                "rain": {
                    "3h": 0.73
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 06:00:00"
            },
            {
                "dt": 1723366800,
                "main": {
                    "temp": 17.34,
                    "feels_like": 17.64,
                    "temp_min": 17.34,
                    "temp_max": 17.34,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 815,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.2,
                    "deg": 333,
                    "gust": 1.48
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 1.66
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 09:00:00"
            },
            {
                "dt": 1723377600,
                "main": {
                    "temp": 16.57,
                    "feels_like": 16.79,
                    "temp_min": 16.57,
                    "temp_max": 16.57,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 815,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 0.48,
                    "deg": 266,
                    "gust": 0.54
                },
                "visibility": 10000,
                "pop": 0.98,
                "rain": {
                    "3h": 0.62
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-08-11 12:00:00"
            },
            {
                "dt": 1723388400,
                "main": {
                    "temp": 19.08,
                    "feels_like": 19.32,
                    "temp_min": 19.08,
                    "temp_max": 19.08,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 816,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 82
                },
                "wind": {
                    "speed": 1.55,
                    "deg": 143,
                    "gust": 1.33
                },
                "visibility": 10000,
                "pop": 0.69,
                "rain": {
                    "3h": 0.45
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 15:00:00"
            },
            {
                "dt": 1723399200,
                "main": {
                    "temp": 20.1,
                    "feels_like": 20.31,
                    "temp_min": 20.1,
                    "temp_max": 20.1,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 816,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 1.84,
                    "deg": 129,
                    "gust": 2
                },
                "visibility": 10000,
                "pop": 0.9,
                "rain": {
                    "3h": 0.42
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-08-11 18:00:00"
            }
        ],
        "city": {
            "id": 3522507,
            "name": "Oaxaca City",
            "coord": {
                "lat": 17.0594,
                "lon": -96.7216
            },
            "country": "MX",
            "population": 262566,
            "timezone": -21600,
            "sunrise": 1722946093,
            "sunset": 1722992234
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg w-full">
            <h1 className="flex justify-center text-2xl font-bold mb-4 text-center">
                <img src={"logo-32x32.png"}/>eservaCLIMA</h1>
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
                onClick={handleSearch}
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
                Dame el clima !!!
            </button>
            {error && <div className="mt-4 text-red-500">{error}</div>}
            {reservaDoomie && (
                <div className="mt-4">
                    {getUniqueDaysForecast(reservaDoomie.list).map((forecast, index) => (
                        <div key={index} className="border-b py-2">
                            <p className="text-gray-700 font-bold">{convertTimestampToDate(forecast.dt)}</p>
                            <p className="text-cold-blue">Temperatura Maxima: {forecast.main.temp_max}°C</p>
                            <p className="text-hot-red">Temperatura Minima: {forecast.main.temp_min}°C</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;