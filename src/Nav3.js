import React from 'react'
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import './Nav3.css';

function Nav3(props) {
  return (
    <div className='Nav3'>
      <div className='Sub'>
        <p><HiOutlineUser/></p>
      <p className='Text'>Login/Register</p>
      </div>
      <p><HiOutlineSearch/></p>
      <p><HiOutlineShoppingCart/> <span >{props.count}</span></p>
      <p><MdOutlineFavoriteBorder/><span>1</span> </p>
    </div>
  )
}

export default Nav3