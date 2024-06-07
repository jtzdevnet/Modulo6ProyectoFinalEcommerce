import React from 'react'
import NavBar from "../../Components/NavBar";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import ProfileButton from "../../Components/ProfileButton";
import logo from "../../assets/logo-light.png";
import './index.scss';

const Header = () => {
  return (
    <header>
        <div className="header-logo">
          <a href="/">
            <img src={logo}  alt="" />
          </a>
        </div>
        <div className="header-container">
            <SearchBar />
            <ProfileButton />
        </div>
    </header>
  )
}

export default Header