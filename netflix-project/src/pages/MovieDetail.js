import React, { useEffect } from 'react'


const MovieDetail = ({item}) => {
  const getMovieDetail=()=>{  
    let url = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`
    let response =  fetch(url)
    let data =  response.json()
    console.log(data)
  }
    
    useEffect(()=>{
      getMovieDetail()
    },[])
    
 
    return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail