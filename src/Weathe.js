import React from 'react'
import Clouds from './Header/clouds.png'
import Clear from './Header/sun.png'
import Snow from './Header/snow.png'
import Rain from './Header/rain.png'
import Hail from './Header/hail.png'

const skyLook = {
    "Clouds": Clouds,
    "Clear": Clear,
    "Snow": Snow,
    "Rain": Rain,
    "Hail": Hail
  }
  

 const Weather = (props)=>{
    return(
        <div className="weather_block">
            {props.city&&
            <div className="wrapper_weather">
                <div className="cit_tem">
                    <p>{props.city}</p>
                    <div className="tempe"><p>{props.temp}&deg;C</p><p className="feels_like">Fells like {props.temp}&deg;C</p></div>
                </div>
                <div className="sky_over">
                    <div className="over">
                        <p>{props.wain}</p>
                        <p>Влажность: {props.humidity}%</p>
                        <p>Скорость ветра: {props.wind} м/с</p>
                    </div>
                    <img src={skyLook[props.sky]} alt={"sky"} className="sky_clouds"/>
                </div>
            </div>
            }
            <p>{props.error}</p>
        </div>
    )
}

export default Weather;
////<img src={Clouds} alt={"Clouds"} className="sky_clouds"/>