import React from 'react'
import { Link } from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import "./Navbar.scss";



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">

        <div className="left">
          <div className="item">
            <img src="/img/img1.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/product/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/product/3">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">E-CART</Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Store</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
