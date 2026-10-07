import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-md bgr1 accordion ps-md-5 pe-md-5">
        <div className="container-fluid ps-md-5 pe-md-5">
          <Link className="navbar-brand" to="/">
            <img src="img/logo-1.png" alt="" width={"90px"} />
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Bicycle" >
                  BICYCLES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Accessories">
                  ACCESSORIES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About_us">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  $0.00
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
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

export default Navbar