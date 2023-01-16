import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity}) => {
    console.log('cities?',cities)
  return (
    <div>
        <Button variant="danger">내지역</Button>
        
        {cities.map((item, index)=>(  //어레이함수
          <Button 
          variant='danger' 
          key={index} 
          onClick={()=>setCity(item)}>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton