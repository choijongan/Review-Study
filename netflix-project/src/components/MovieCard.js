import React from 'react'

const MovieCard = ({ item }) => {
  return (
    <div
    className='moviecard' //card라는 이름은 이미있어서 적용이 되지않는다.
    style={{
      backgroundImage:
      "url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"
    }}>MovieCard </div> //url 무조건 소문자, ''로 감싸주고 + 넣어줘야됨(스트링으로 감싸기), ``다이나믹한 값으로 살려야되서 '' '' 따로묶음.  
  )
}

export default MovieCard