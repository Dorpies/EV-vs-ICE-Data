import React, { useEffect, useState } from 'react';

export default function Chart() {
    const [data, setData] = useState([]);

    // Data ophalen van de mock API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Mock API URL
            .then(response => response.json())
            .then(data => {
                console.log('API Data:', data); // Data loggen voor debugging
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Grafiek Component</h2>
            <ul>
                {/* Toont de eerste 5 items als voorbeeld */}
                {data.slice(0, 5).map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}