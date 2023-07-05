import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <Link to="/" ><img className="header__icon" src="https://archive.org/download/AMDb.se/AMDb.se.jpg" 
            alt="icon" height="40px" width="90px" /> </Link>
            <Link to="/movies/popular" >Popular</Link>
            <Link to="/movies/top_rated" >Top Rated</Link>
            <Link to="/movies/upcoming" >Upcoming</Link>
        </div>
    </div>
  )
}

export default Header