import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link className='header__link' to="/" > <span> <img className="header__icon" 
            src="https://archive.org/download/AMDb.se/AMDb.se.jpg" alt="icon" /></span> </Link>
            <Link className='header__link' to="/movies/popular" > <span>Popular</span> </Link>
            <Link className='header__link' to="/movies/top_rated" > <span>Top Rated</span> </Link>
            <Link className='header__link' to="/movies/upcoming" > <span>Upcoming</span> </Link>
        </div>
    </div>
  )
}

export default Header