import React from 'react'

const Banner = ({movie}) => {
  console.log('movie?',movie)
  return (
    <div
    className='banner' 
    style={{
      backgroundImage: 
      'url('+ //url 무조건 소문자, ''로 감싸주고 + 넣어줘야됨(스트링으로 감싸기), ``다이나믹한 값으로 살려야되서 '' '' 따로묶음.   
        `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
        ')'
      }}
      >
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </div>
      </div>
  )
}

export default Banner