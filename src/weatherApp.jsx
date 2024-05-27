import SearchBox from "./searchBox";
import InfoBox from "./infoBox";
import { dividerClasses } from "@mui/material";
import { useState } from "react";

export default function WeatherApp() {
let [weatherInfo , setweatherInfo]=useState(
    {
        city:'nagpur',
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:'haze'
    }    
);


let updateInfo=(newinfo)=>{
setweatherInfo(newinfo);
}

  return (
    <div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox  info={weatherInfo}/>
      
    </div>
  );
}
