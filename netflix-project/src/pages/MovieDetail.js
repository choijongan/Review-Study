import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const MovieDetail = () => {
  const {id} = useParams()
  console.log('id',id)
  // const getMovieDetail=()=>{  
  //   let url = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`
  //   let response =  fetch(url)
  //   let data =  response.json()
  //   console.log(data)
  // }
    
  //   useEffect(()=>{
  //     getMovieDetail()
  //   },[])
    
 
    return (
    <div>
      <h1>MovieDetail{id}</h1>
    </div>
  )
}

export default MovieDetail