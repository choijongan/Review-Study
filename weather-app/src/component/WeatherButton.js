import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
        <Button variant="danger">내지역</Button>
        <Button variant="danger">미국</Button>
        <Button variant="danger">일본</Button>
    </div>
  )
}

export default WeatherButton