import React from 'react'
import img from '../image/Odisha_Tourism.webp'

const Header = () => {
  return (
    <div>
        
        <>
        <section className="nav-bar ">
  <div className="logo"><img className="" src={img} style={{height:'60px',width:'150px'}} alt /></div>
  <ul className="menu1">
    <li><a href="/">home</a></li>
    <li><a href="/about-us">about</a></li>
    <li><a href="/Package">Package</a></li>
    <li><a href="/Gallery">gallery</a></li>
    <li><a href="/Contact">Contact us</a></li>
  </ul>
</section>

        </>
    </div>
  )
}

export default Header