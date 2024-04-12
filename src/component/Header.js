import React from 'react'
import img from '../image/Odisha_Tourism.webp'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <>
        <section className="nav-bar ">
  <div className="logo"><img className="" src={img} style={{height:'60px',width:'150px'}} alt /></div>
  <ul className="menu1">
    <li><Link to="/">home</Link></li>
    <li><Link to="/about-us">about</Link></li>
    <li><Link to="/Package">Package</Link></li>
    <li><Link to="/Gallery">gallery</Link></li>
    <li><Link to="/Contact">Contact us</Link></li>
  </ul>
</section>

        </>
    </div>
  )
}

export default Header