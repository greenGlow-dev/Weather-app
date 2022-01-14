import React from "react";
import axios from 'axios';

const  URL = "https://api.openweathermap.org/data/2.5/weather"
const  API_KEY ="886667b99410626fdc3bbb89dd615966"


export  const  FetchWeather = async (query) => {
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    return data;
}
