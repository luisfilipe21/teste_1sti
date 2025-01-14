import axios from "axios";

const watherKey = "gaImZQwSurd3YcfppCPGgtxmAo49Ybht"
export const fetchApiData = async (city) => {
    const baseUrl = "https://api.tomorrow.io/v4/weather/history/recent"

    const params = new URLSearchParams({
        location: city,
        timestamp: "1d",
        units: 'metric',
        apikey: watherKey
    })

    try {
        const response = await axios.get(baseUrl,{params})
        
        return response.data
    } catch (error) {
        console.error(error)
    }
}

