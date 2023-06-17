import React from 'react';
import { useNavigate } from "react-router-dom";

import "./Header.css"

const Header = () => {
    const navigate = useNavigate    ();
  return (
    <div className='header'>
        <h2 className='header-content' onClick={() => navigate("/")}>BookShelf</h2>
        <p  className='header-content header-search' onClick={() => navigate("/search")}>Search 🔍</p>
    </div>
  )
}

export default Header