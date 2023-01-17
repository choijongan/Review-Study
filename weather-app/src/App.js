import { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
//2. 날씨정보에는 도시, 섭씨 화씨, 화씨 날씨상태
//3. 5개의 버튼이 있따 (1개는 현재위치, 4개는 다른도시)
//4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반 날씨 표시
//6. 데이터를 들고온느 동안 로딩 스피너가 돈다.

function App() {

  const [weather, setWeather]=useState(null);
  const [city, setCity]=useState('')
  const [loading, setLoading]=useState(false)
  const cities=['paris','new york','tokyo','seoul'] //다른 곳에서 쓰일 정보는 따로 모아서 관리해주면 좋다.
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7b3ce9c967ff0e9fe57fbdf8463c6ee9&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b3ce9c967ff0e9fe57fbdf8463c6ee9&units=metric`
    setLoading(true)
    let response = await fetch(url)
    let data = await response.json()
      setWeather(data)
      setLoading(false)
  }

  useEffect(()=>{
    if(city==''){
       getCurrentLocation();
    }else{
       getWeatherByCity();
    }
  },[city])



  return (
    <div>
      {loading?(
      <div className='container'> 
      <ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"/>
        </div>
      ):( 
      <div className='container'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity}/>
      </div>
      )}
    </div>
  );
}

export default App;
