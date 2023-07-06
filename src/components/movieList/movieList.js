import React, { useState, useEffect } from 'react';
import './movieList.css';
import {Params, useParams} from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import Cards from '../card/Card';



const movieList = () => {

  const [movieList, setMovieList] = useState([]);
  const {type} = useParams();

  useEffect(() => {
    getdata();    
  }, [])
  
  useEffect(() => {
    getdata();    
  }, [type])

  getdata = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=abb4f6428bc3f6a5ee5f4d7de2c21bc3&language=en-US`)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
  }
  
  return (
    <div className='movie__list'>
      <h2 className='list__title'>{(type ? type : "POPULAR").toUpperCase()} </h2>
      <div className='list__cards'>
        {
          movieList.map(movie => (
            <Cards movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default movieList
