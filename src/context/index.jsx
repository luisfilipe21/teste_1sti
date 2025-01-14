import { createContext, useState } from "react";

export const WeatherDataContext = createContext();

export const WeatherDataProvider = ({ children }) => {

    const [city, setCity] = useState(true);
    const [cityData, setCityData] = useState(false);

    return (
        <WeatherDataContext.Provider value={{ city, setCity, cityData, setCityData }}>
            {children}
        </WeatherDataContext.Provider>
    )
}