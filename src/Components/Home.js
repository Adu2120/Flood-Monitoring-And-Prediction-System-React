import React from 'react'
// import Chart from 'react-google-charts';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

export default function Home() {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '194b318f530dd70bb26f66d2a890b780',
        lat: '16.7050',
        lon: '74.2433',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
        <>
            {/* Page Heading  */}
            <div class="rounded-0 shadow-lg text-center allCap">
                <h1 class="border heading1">Weather Forecast</h1>
            </div>
            {/* Page Heading end  */}

            <div style={{ padding: '5%' }}>
                <ReactWeather
                    isLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang="en"
                    locationLabel="Kolhapur"
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
        </>
    )
}
