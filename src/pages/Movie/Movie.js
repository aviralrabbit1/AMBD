import React, {useEffect, useState} from "react";
import './Movie.css';
import { useParams} from 'react-router-dom';


const Movie = () => {
    const [currentMovieDetail, setCurrentMovieDetail] = useState();
    const { id } = useParams();
  
    useEffect(() => {
      getData()
      window.scrollTo(0, 0)
    }, [])
  
    const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=abb4f6428bc3f6a5ee5f4d7de2c21bc3&language=en-US`)
      .then(res => res.json())
      .then(data => setCurrentMovieDetail(data.results))
    }

    return (
        <div>Movie details</div>
    )
}

export default Movie