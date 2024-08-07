// List.js
import React from 'react';

const List = ({ weather, convertToHumanDate }) => {

    return (
        <div className="mt-4">
            {Object.keys(weather).map((date, index, array) => (
                <div
                    key={index}
                    className={`p-[5px] ${index === 0 ? 'bg-selected-green text-white rounded-lg' : ''} ${index < array.length - 1 ? 'border-b' : ''}`}
                >
                    <p className="text-gray-700 font-bold">
                        {convertToHumanDate(date, index === 0)}
                    </p>
                    <p className={` ${index === 0 ? 'text-white' : 'text-cold-blue'}`}>
                        Temperatura Maxima: {weather[date].max}°C
                    </p>
                    <p className="text-hot-red">
                        Temperatura Minima: {weather[date].min}°C
                    </p>
                </div>
            ))}
        </div>
    );
};

export default List;