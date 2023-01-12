import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
    console.log('cities?',cities)
  return (
    <div>
        <Button variant="danger">내지역</Button>
        
        {cities.map((item)=>(  //어레이함수
          <Button variant='danger'>{item}</Button>
        ))}
    </div>
  )
}

export default WeatherButton