import React, { useState, useEffect } from 'react';
import  Skeleton , { SkeletonTheme } from 'react-loading-skeleton';
import './Card.css';
import { Link } from 'react-router-dom';

const Cards = ({movie}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, [])

  return (
    <>
    isLoading ? 
    <div className='cards'>
        <SkeletonTheme color='#202020' highlightColor='#444' >
            <Skeleton height={300} duration={2} />
        </SkeletonTheme>
    </div>
    ): <Link to={`movie/${movie.id}`} style={{textDecoration: "none", color:"white" }}  >
        <div className='cards'>
            <img className='cards__img' alt=""
            src={`https://image.tmdb.org/t/p/original${movie?movie.poster:""}`} />
            <div className='cards__overlay'>
                <div className='cards__title'>{movie?movie.orignal_title:""}</div>
                <div className='cards__runtime'>{movie?movie.vote_average:""}</div>
                <i className='fas fa-star'/>{" "}
            </div>
                <div className='cards__description'>{movie?movie.overvie.slice(0, 118)+"...":""}</div>
        </div>
  
    </Link>
    </>
  )
}

export default Cards
