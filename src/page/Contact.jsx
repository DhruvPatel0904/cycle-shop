import React from "react";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <div className="bgi19 position-relative">
       

        <div className="container mx-auto text-white p-md-0 pt-md-5 px-3 py-5 just">
          <div className="col-md-10 mx-auto p-md-5 p-2 p-sm-0">
            <h1 className="ff text-center mb-5">CONTACT US</h1>
          </div>
        </div>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12422.490157324304!2d-76.995851!3d38.886877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b831784f40a1%3A0x5aaf271e1deb927a!2s212%207th%20St%20SE%2C%20Washington%2C%20DC%2020003!5e0!3m2!1sen!2sus!4v1763463445976!5m2!1sen!2sus"
          width="100%"
          height="300px"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container-fluid p-5">
        <div className="container mx-auto row text-center row-gap-3 py-5">
          <div className="col-md-4 pb-md-5">
            <i className="fa-solid fa-truck clr1 fs-md-3"></i>
            <h1 className="ff2">1 800 755 60 21</h1>
            <p className="clr2">Sales Related Enquiries</p>
          </div>
          <div className="col-md-4 pb--md-5">
            <i className="fa-solid fa-toolbox clr1 fs-md-3"></i>
            <h1 className="ff2">1 800 755 60 22</h1>
            <p className="clr2">Service Related Enquiries</p>
          </div>
          <div className="col-md-4 pb-md-5">
            <i className="fa-solid fa-store clr1 fs-md-3"></i>
            <h1 className="ff2">1 800 755 60 23</h1>
            <p className="clr2">Dealership Related Enquiries</p>
          </div>
        </div>
      </div>

      <div className="container-fluid bgr px-md-5 p-0">
        <div className="container-md mx-auto row p-0">
          <div className="col-md-12 m-0 row p-0">
            <div className="col-md-6 bg-white p-md-5 box-s ms">
              <form action="" className="row py-4 p-1 p-sm-2">
                <h3 className="ff8 mb-4">LET'S GET IN TOUCH</h3>
                <div className="col-md-6 col-6">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-100 input p-2"
                  />
                </div>
                <div className="col-md-6 col-6">
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-100 input p-2"
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-100 input p-2"
                  />
                  <textarea
                    name=""
                    id=""
                    rows={5}
                    placeholder="Enter your message"
                    className="w-100 input my-3"
                  ></textarea>
                  <button className="btn1">SEND MESSAGE</button>
                </div>
              </form>
            </div>

            <div className="col-md-6 row px-md-5 m-0 p-1 p-sm-2 py-sm-5 pt-5 row-gap-4 row-gap-md-0">
              <h1 className="ff8">CONTACT DETAILS</h1>
              <div className="col-md-12">
                <h1 className="ff2">OUR HOURS</h1>
                <p className="clr2 mb-1 mt-4">10:00 AM - 22:00 PM</p>
                <p className="clr2">Monday - Friday</p>
              </div>
              <div className="col-md-12">
                <h1 className="ff2">LOCATION</h1>
                <p className="clr2 mt-4">
                  212 7th St SE, Washington, DC 20003, USA
                </p>
              </div>
              <div className="col-md-12">
                <h1 className="ff2">CONTACT US</h1>
                <p className="clr2 mb-1 mt-4">Phone: 1 800 755 60 20</p>
                <p className="clr2">Email: contact@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default Contact;
