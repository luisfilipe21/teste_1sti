import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearch } from "react-icons/io5"
import { WeatherDataContext } from "../../context";
import { Input } from "./Input/index.jsx";
import { fetchApiData } from "../../service/index.jsx";

export const FormCityData = () => {

    const { register, handleSubmit } = useForm();
    const { setCity, setCityData } = useContext(WeatherDataContext);


    const [cityList, setCityList] = useState(() => {

        const storedCapitals = localStorage.getItem("@capitals")
        return storedCapitals ? JSON.parse(storedCapitals) : [];

    })

    const fetchData = async (payload) => {
        try {
            const data = await fetchApiData(payload.city);

            const isDuplicate = cityList.some(item => item.location.name === data.location.name);

            if (!isDuplicate) {

                const updateCapitalList = [...cityList, data]

                setCityList(updateCapitalList)
                localStorage.setItem('@capitals', JSON.stringify(updateCapitalList));
            }

            setCityData(data);
            setCity(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(fetchData)}>
            <Input
                {...register("city")}
                id="city"
                type="text"
                placeholder='Insira aqui no nome da cidade'
            />
            <button type="submit"><IoSearch size={28} color="#808080" /></button>
        </form>
    )
}