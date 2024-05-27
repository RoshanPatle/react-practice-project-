import './infoBox.css'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function infoBox({info}){
    
  
    
    
    return(

        <div className=" infoBox">
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
         <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.unsplash.com/photo-1561971208-acb5d2ddf439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFkZWQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
         <p>City  :  {info.city}</p>
         <p>Temperature  : {info.temp}</p>
         <p>Humidity : { info.humidity}</p>
         <p>Min temp : { info.tempMin}</p>
         <p>Max temp : {info.tempMax}</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>

    )
}