import React from 'react'
import img from '../image/Odisha_Tourism.webp'
import { Link } from 'react-router-dom'

const Header = () => {



  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div>
      <>
        <div className="container-fluid con">
          <marquee>In today’s world, almost everybody chooses to travel and tourism as their leisure. Traveling is a good way to learn about the world.</marquee>
        </div>

      </>
      <>
        <section className="nav-bar" id='header'>
          <div className="logo">
            <img className="" src={img} style={{ height: '70px', width: '150px',position:'relative',bottom:'12px' }} alt='about' />
          </div>
          <ul className="menu1">
            <li><Link className='underline active' to="/tourism-management-system">home</Link></li>
            <li><Link className='underline' to="/about-us">about</Link></li>
            <li><Link className='underline' to="/Package">Package</Link></li>
            <li><Link className='underline' to="/Gallery">gallery</Link></li>
            <li><Link className='underline' to="/Contact">Contact us</Link></li>
            {/* <li><Link className='underline ' to="/Register">Login/Register</Link></li> */}
          </ul>
        </section>
        <div id="header1">
          <div id="mySidenav" className="sidenav" >
            <Link
              // to="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
              ×
            </Link>
            <ul className="">
              <li><Link to="/tourism-management-system"  onClick={closeNav}>home</Link></li>
              <li><Link to="/about-us"  onClick={closeNav}>about</Link></li>
              <li><Link to="/Package"  onClick={closeNav}>Package</Link></li>
              <li><Link to="/Gallery"  onClick={closeNav}>gallery</Link></li>
              <li><Link to="/Contact"  onClick={closeNav}>Contact us</Link></li>
            </ul>
          </div>
          <div id="main">
           
            <span style={{ fontSize: 30, cursor: "pointer", float: 'right' }} onClick={openNav}>
              <img
                src={img}
                style={{ height: '60px', width: '150px', position: 'relative', right: '178px' }}
                alt="Bootstrap"
              />
              ☰
            </span>
          </div>
        </div>

      </>
    </div>
  )
}

export default Header