import React, { useEffect } from 'react'
import { movieaction } from '../redux/actions/MovieAction'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(
    state=>state.movie
    );
  

  useEffect(()=>{
    dispatch(movieaction.getMovies());
  },[]);
  // loading이 true면 loading 스피너를 보여주고
  // loading이 false면 data를 보여주고

  //true : 데이터 도착 전 
  //false : 데이터 도착 후, 에러가 났을때 
  if(loading){ //만약에 loading이 true면 로딩스피너를 보여주고, false면 영화를 불러와라.
    return <ClipLoader
        color='#ffff'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies} />
    </div>
  )
}
//수정전 : {popularMovies.results && <Banner movie={popularMovies.results[0]}/>}
//Banner에 첫 장면은 popluarMovies의 results에서 Array 0번째 결과를 보여주겠다는 말임.
//Cannot read properties of undefined (reading '0') 오류뜨면 조건부 렌더링 해야됨.
//바로 results만 달라하면 로딩안되서 위에 오류남. 앞에 popularMovies.results && 필드가 
//도착하면 result를 보여주도록 조건부 렌더링을 해주자(리엑트에서 중요한 개념)

//수정후 <Banner>는 로딩 스피너가 이미 전체 조건부 렌더링 해줘서 필요 없음.
 
export default Home