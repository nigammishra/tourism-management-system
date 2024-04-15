import React from 'react'
import img from '../image/Odisha_Tourism.webp'
import { Link } from 'react-router-dom'

const Header = () => {



  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <div>

      <>
        <section className="nav-bar" id='header'>
          <div className="logo"><img className="" src={img} style={{ height: '60px', width: '150px' }} alt /></div>
          <ul className="menu1">
            <li><Link to="/tourism-management-system">home</Link></li>
            <li><Link to="/about-us">about</Link></li>
            <li><Link to="/Package">Package</Link></li>
            <li><Link to="/Gallery">gallery</Link></li>
            <li><Link to="/Contact">Contact us</Link></li>
          </ul>
        </section>
        <div id="header1">
          <div id="mySidenav" className="sidenav">
            <Link
              to="javascript:void(0)"
              className="closebtn"
              onClick={closeNav}
            >
              ×
            </Link>
            <ul className="">
              <li><Link to="/tourism-management-system">home</Link></li>
              <li><Link to="/about-us">about</Link></li>
              <li><Link to="/Package">Package</Link></li>
              <li><Link to="/Gallery">gallery</Link></li>
              <li><Link to="/Contact">Contact us</Link></li>
            </ul>
          </div>
          <div id="main">
            {/* <span
              style={{ fontSize: 30, cursor: "pointer" }}
              onclick="openNav()"
            >
              ☰ open
            </span> */}
            <span style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>
              ☰ <img
                src={img}
                style={{ height: '60px', width: '150px', float: 'right' }}
                alt="Bootstrap"
              />
            </span>
          </div>
        </div>

      </>
    </div>
  )
}

export default Header