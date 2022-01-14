import React, {useState} from 'react';
import {FetchWeather} from "../FetchWeather";

function Form(props) {
    const[query, setQuer] = useState('')
    const[weather, setWeather] = useState({})
    let a = new Date();
    console.log(a)

    const search = async (e) => {
      if(e.key === 'Enter'){
          const data = await  FetchWeather(query)
          setWeather(data)
          setQuer();
          console.log(data)
      }
    }
    return (
        <div className='maninContainer'>
            <div className="search">
                <input type="text"
                       className="search"
                       placeholder="Search..."
                       value={query}
                       onChange={(e) => setQuer(e.target.value)
                       } onKeyPress={search}

                />
              

            </div>
            {weather.main &&(
                <div className='card'>
                    <div className='city'>
                        <div className="info">
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""/>

                        </div>
                        <div className="details">
                            <h2 className='city-name'>
                                <span>{weather.name}</span>
                                <span>{weather.sys.country}</span>
                            </h2>
                            <div className="city-temp">
                                {Math.round(weather.main.temp) }
                                <sup>&deg;C</sup>
                                <p>{weather.weather[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Form;