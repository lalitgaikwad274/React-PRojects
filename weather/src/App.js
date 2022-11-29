import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import axios from "axios";
import { useState } from "react";

function App() {
   const [Data, setData] = useState([]);

   const fetchData = (cityName) => {
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=975650f3273db9f230a8343f344a6b64&units=metric`
         )
         .then((response) => {
            // console.log("In APP", response.data);

            setData(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div>
         <div className="App">
            <WeatherForm onfetch={fetchData} />
            <WeatherInfo Data={Data} />
         </div>
      </div>
   );
}

export default App;
