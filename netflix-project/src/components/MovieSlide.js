import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MovieSlide = ({ movies }) => {
  console.log('movies',movies)
  return ( //map을 넣으면 array에 있는 아이템을 가져온다. 그 후 props로 item을 넣어준다. 어래이타입은 .map
    <div>
        <Carousel responsive={responsive}>
           {movies.results.map(item=><MovieCard item={item}/>)}
        </Carousel>
    </div>
  )
}

export default MovieSlide