import React from 'react'
import Nav3 from './ui/Nav3'
import Nav1 from './ui/Nav1'
import Nav2 from './ui/Nav2'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className="Nav">
      <Nav1/>
      <Nav2/>
      <Nav3 count={props.count}/>
      </div>
  )
}

export default Navbar