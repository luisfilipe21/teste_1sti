import { useContext, useEffect, useState } from "react"
import { WeatherDataContext } from "../../context"
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { NextDay } from "../DailyCard";

export const Modal = () => {

    const { cityData, setCity } = useContext(WeatherDataContext);
    const [time, setTime] = useState();

    const closeModal = () => {
        setCity(false);
    }


    const timeOfDay = () => {
        const timeNow = new Date().getHours();
        setTime(timeNow)
    }

    useEffect(() => {
        timeOfDay()
    }, [time])

    const weatherCodeMap = {
        1000: "Céu limpo",
        1001: "Nublado",
        1100: "Predominantemente limpo",
        1101: "Parcialmente nublado",
        1102: "Predominantemente nublado",
        2000: "Nevoeiro",
        2100: "Nevoeiro leve",
        3000: "Vento",
        3001: "Vento brando",
        3002: "Vento forte",
        4000: "Garoa",
        4001: "Chuva",
        4200: "Chuva leve",
        4201: "Chuva forte",
        5000: "Neve",
        5001: "Flocos de neve",
        5100: "Neve leve",
        5101: "Neve pesada",
        6000: "Garoa congelante",
        6001: "Chuva congelante",
        6200: "Chuva congelante leve",
        6201: "Chuva congelante forte",
        7000: "Granizo",
        7101: "Granizo pesado",
        7102: "Granizo leve",
        8000: "Tempestade",
    };

    return (
        <>
            {cityData !== false ? <div className="containerModal">
                <div className="boxRegion">
                    {console.log(cityData)}
                    <p>{cityData?.location.name.split(",")[0]}</p>
                    <span onClick={closeModal}>X</span>
                </div>


                <h2>
                    {cityData?.timelines.hourly[time].values.temperature.toFixed(0)}°C {weatherCodeMap[cityData?.timelines.hourly[time].values.weatherCode]}
                    {console.log(cityData?.timelines.hourly[time].values.weatherCode)}
                </h2>

                <div className="boxClimate">
                    <div className="boxInfoMacro">
                        <div className="boxTemperature">
                            <p>
                                <FaArrowDown color="#FF8100ff" /> {cityData?.timelines.daily[0].values.temperatureMin.toFixed(0)}°
                            </p>
                            <p>
                                <FaArrowUp color="#FF8100ff" /> {cityData?.timelines.daily[0].values.temperatureMax.toFixed(0)}°
                            </p>
                        </div>

                        <p>
                            Vento: <span>
                                {((cityData?.timelines.hourly[time].values.windSpeed) * 1.60934).toFixed(2)}km/h
                            </span>
                        </p>
                        <p>
                            Sensação térmica: <span>
                                {cityData?.timelines.hourly[time].values.temperatureApparent.toFixed(0)}ºC
                            </span>
                        </p>
                        <p>
                            Humidade: <span>
                                {cityData?.timelines.hourly[time].values.humidity}%
                            </span>
                        </p>
                    </div>

                    <hr />

                    <div className="containerNextDays">

                        {cityData.timelines.daily.slice(0).map((time, data) => {
                            return <NextDay key={data} data={time} />
                        })}

                    </div>
                </div>
            </div>
                : null}


        </>
    )
}