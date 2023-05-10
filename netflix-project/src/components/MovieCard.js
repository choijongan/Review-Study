import React from 'react'

const MovieCard = () => {
  return (
    <div
    className='card' 
    style={{
      backgroundImage:
      "url('https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/A7JQ7MIV5fkIxceI5hizRIe6DRJ.jpg')"
    }}>MovieCard </div> //이미지는 항상 "" string타입 안에 넣기.
  )
}

export default MovieCard