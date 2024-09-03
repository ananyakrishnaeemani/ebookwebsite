import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <SearchForm />
                <p className='header-text fs-18 fw-3'>The writer only begins the book, The reader finishes it.
                </p>
               
            </div>
        </header>
    </div>
  )
}

export default Header