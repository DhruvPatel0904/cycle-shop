import React from 'react'

function Footer() {
  return (
    <>
        <div className="container-fluid bg-black p-md-5 p-sm-3">
        <div className="container-md mx-auto row text-white p-0 py-5 text-center text-sm-start row-gap-4">
          <div className="col-md-3 col-sm-6">
            <img src="img/logo-1.png" alt="" width={"100px"} />
          </div>
          <div className="col-md-3 col-sm-6">
            <h1 className="ff2 mb-4">USEFULL LINKS</h1>
            <a href="#" className="a">
              <h6>Home</h6>
            </a>
            <a href="#" className="a">
              <h6>Shop</h6>
            </a>
            <a href="#" className="a">
              <h6>About Us</h6>
            </a>
            <a href="#" className="a">
              <h6>Contact us</h6>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h1 className="ff2 mb-4">OUR COLLECTION</h1>
            <a href="#" className="a">
              <h6>Mountain Bikes</h6>
            </a>
            <a href="#" className="a">
              <h6>City Bikes</h6>
            </a>
            <a href="#" className="a">
              <h6>Speciality Bikes </h6>
            </a>
            <a href="#" className="a">
              <h6>Electric bikes </h6>
            </a>
          </div>
          <div className="col-md-3 col-sm-6">
            <h1 className="ff2 mb-4">ACCOUNT</h1>
            <a href="#" className="a">
              <h6>Customer Login</h6>
            </a>
            <a href="#" className="a">
              <h6>Dealer Login</h6>
            </a>
            <a href="#" className="a">
              <h6>Address</h6>
            </a>
            <a href="#" className="a">
              <h6>Payment Methods</h6>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-black p-md-5 p-4 p-sm-3 py-sm-4 border-top">
        <div className="container-md mx-auto row text-white p-0 row-gap-3">
          <div className="col-md-6 col-sm-6 text-center text-sm-start">
            <h6>Copyright @ 2025 Cycle Shop</h6>
          </div>
          <div className="col-md-6 col-sm-6 text-sm-end text-center">
            <a href="#" className="a me-3">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" className="a  me-3">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="a  me-3">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="a  me-3">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer