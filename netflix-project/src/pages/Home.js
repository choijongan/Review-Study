import React, { useEffect } from 'react'
import { movieaction } from '../redux/actions/MovieAction'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(movieaction.getMovies())
  },[])
  return (
    <div>Home</div>
  )
}

export default Home