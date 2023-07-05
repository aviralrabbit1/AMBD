import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// taken from https://www.npmjs.com/package/react-responsive-carousel

import {Carousel} from 'react-responsive-carousel';


function Home() {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=abb4f6428bc3f6a5ee5f4d7de2c21bc3&language=en-US")
    .then(res => res.json())
    .then(data => setPopularMovies(data.results))
  }, [])
  console.log(popularMovies);
    
  return (
    <div>
        <div className='poster'>
          <Carousel 
            showThumbs={false} autoPlay={true} infiniteLoop={true}
            showStatus={false} transitionTime={3}
          >
            {
              popularMovies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`} >
                  <div className='posterImage'>
                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                    alt={movie.original_name} />
                  </div>
                  <div className='posterImage__overlay'>
                    <div className='posterImage__runtime'>
                      {movie ? movie.release_date: ""}
                      <span className='posterImage__rating'>
                        {movie ? movie.vote_average: ""}
                        <i className='fas fa-star'/>{" "}

                      </span>
                    </div>
                    <div className='posterImage__description'>
                      {movie ? movie.overview : ""}
                    </div>

                  </div>
                </Link>
              ))
            }
          </Carousel>
        </div>
    </div>
  )
}

export default Home