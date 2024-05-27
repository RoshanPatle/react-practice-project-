
import './searchBox.css'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from 'react';






export default function searchBox({updateInfo}) {
    let [city , setCity]=useState('');

    const API_URL='https://api.openweathermap.org/data/2.5/weather'
    const API_key='4c768511a315afe551682a3924ff194a'

   
let GetWeatherInfo= async ()=>{
  let response=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
  let jsonResponse=await response.json();
  console.log(jsonResponse);

  let result={
    
    temp:jsonResponse.main.temp,
    tempMin:jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feelsLike:jsonResponse.main.feels_like,
  }
return result;
}


    let handleChange=  (evt)=>{
setCity(evt.target.value)
    }

    let handleSubmit= async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity('');
      let newinfo=await GetWeatherInfo();
      updateInfo(newinfo)
    }


  return (
    <div className=" searchBox">
        <h3>Search for the Weather</h3>

        <form action="" onSubmit={handleSubmit}>
      <TextField id="outlined-basic" label="city" variant="outlined"  required value={city}  onChange={handleChange}/>
      <br /><br />
      <Button variant="contained" type='submit'>text</Button>
      </form>
    </div>
  );
}
