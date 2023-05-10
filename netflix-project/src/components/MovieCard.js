import React from 'react'

const MovieCard = ({ item }) => {
  return (
    <div
    className='moviecard' //card라는 이름은 이미있어서 적용이 되지않는다.
    style={{
      backgroundImage:
      "url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"
    }}>MovieCard </div> //이미지는 항상 "" string타입 안에 넣기. ``고정값뒤에 유동적인 값 넣기.
  )
}

export default MovieCard