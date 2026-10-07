import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar2() {
  return (
    <>
        <nav className="navbar n navbar-expand-md transparent-nav accordion ps-sm-5 pe-sm-5 ">
          <div className="container-fluid ps-md-5 pe-md-5 justify-content-between">
            <Link className="navbar-brand" to="/">
              <img src="img/logo-1.png" alt="" width={"70px"} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
            {/* Left links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Bicycle">BICYCLES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Accessories">ACCESSORIES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About_us">ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">CONTACT</Link>
              </li>
            </ul>

            {/* Right utilities — pushes to far right */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <span className="nav-link">$0.00</span>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="fa-solid fa-cart-shopping text-white"></i>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>

        <Outlet/>
    </>
  )
}

export default Navbar2