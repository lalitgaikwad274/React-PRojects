import React from "react";
// import rain from "./rain.jpeg";
import "./weather.css";
import demo from "./images/demo.webp";
import weather from "./weather";

const WeatherInfo = ({ Data }) => {
   // console.log("in WeatherInfo", Data.length);

   let imagesrc;
   if (Data.length !== 0) {
      for (let w of weather) {
         if (w.desc === Data.weather[0].main) {
            imagesrc = w.img;
            break;
         }
      }
   }
   // console.log(imagesrc);

   return (
      <>
         {Data.length !== 0 ? (
            <div className="conatiner  bg-secondary main">
               <div className="image">
                  <img src={imagesrc} alt="Rainss" />

                  <div className="over">
                     <div>
                        <span className="one">
                           {Data.main["temp"]}
                           <sup>o</sup>
                        </span>
                     </div>
                     <div className="two">
                        <span className="name">{Data.name}</span>
                        <span className="date">06:09-Sunday 6 Oct 19</span>
                     </div>
                     <div className="three">
                        <img
                           src={`http://openweathermap.org/img/wn/${Data.weather[0].icon}@2x.png`}
                           alt="Rain"
                        />
                        <span>{Data.weather[0].main}</span>
                     </div>
                  </div>
               </div>
               <div className="Info-box">
                  <strong>Weather Details</strong>
                  <div className="info">
                     <span>Cloudy</span>
                     <span>{Data.clouds.all}%</span>
                  </div>
                  <div className="info">
                     <span>Humidity</span>
                     <span>{Data.main.humidity}%</span>
                  </div>
                  <div className="info">
                     <span>Pressure</span>
                     <span>{Data.main.pressure}Pa</span>
                  </div>
                  <div className="info">
                     <span>Wind</span>
                     <span>{Data.wind.speed}km/h</span>
                  </div>
                  <div className="info">
                     <span>Visibility</span>
                     <span>{Data.visibility}m</span>
                  </div>
               </div>
            </div>
         ) : (
            <div className="conatiner  bg-secondary main">
               <div className="image1">
                  <img src={demo} alt="Rainss" />
               </div>
            </div>
         )}
      </>
   );
};

export default WeatherInfo;
