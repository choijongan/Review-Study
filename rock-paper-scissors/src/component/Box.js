import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src='https://korearps.kr/wp-content/uploads/sites/75/2020/03/slider-pic-103.png'/>
        <h2>WIN</h2>
    </div>
  )
}

export default Box