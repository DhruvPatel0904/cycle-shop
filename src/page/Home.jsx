import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


function Home() {
  return (
    <>
      <div className="bgi position-relative pt-5">
         <div className="container-md mx-auto text-white p-md-0 pt-md-5 px-3 py-5">
          <div className="col-md-6">
            <h6 className="ff1">NEWLY LAUNCHED</h6>
            <h1 className="ff">KRYO X26 </h1>
            <h1 className="ff">MTB </h1>
            <h5 className="ff2 mt-4">SPECIFICATIONS:</h5>
            <ul>
              <li>
                <i className="fa-solid fa-bullseye text-white"></i>Lightweight
                18" Frame
              </li>
              <li>
                <i className="fa-solid fa-bullseye text-white"></i>Steel
                Suspension Fork
              </li>
              <li>
                <i className="fa-solid fa-bullseye text-white"></i>Steel
                Hardtail Frame
              </li>
            </ul>
            <a href="#">
              <button className="btn1 mt-3">BUY NOW</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-md-5 py-5">
        <div className="container-md mx-auto p-0 justify-content-center">
          <h1 className="text-center ff4 mb-5">NEW ARRIVALS</h1>
          <div className="col-md-12 row p-0 py-md-4 m-0 justify-content-center justify-content-sm-start">
            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner2.jpg" alt="" width="100%" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Bicycles</p>
              <h6 className="ff3 ">KRYO X26 MTB-MODEL K</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$350.00</h6>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner3.jpg" alt="" width="100%" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Bicycles</p>
              <h6 className="ff3 ">KRYO X26 MTB-MODEL X</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$350.00</h6>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner4.jpg" alt="" width="100%" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Bicycles</p>
              <h6 className="ff3 ">KRYO X26 MTB-MODEL Y</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$350.00</h6>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner5.jpg" alt="" width="100%" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Bicycles</p>
              <h6 className="ff3 ">KRYO X26 MTB-MODEL Z</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$350.00</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="bgi2 text-white p-md-5 p-2 p-sm-3">
        <div className="container-md mx-auto py-5">
          <div className="col-md-6">
            <h1 className="ff2">DISCOVER THE COLLECTION</h1>
            <h1 className="ff5 mt-3">MOUNTAIN BIKES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <div className="co-md-12 row">
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
            </div>
            <a href="#">
              <button className="btn1 mt-4">EXPLORE NOW</button>
            </a>
          </div>
        </div>
      </div>

      <div className="bgi3 text-white p-md-5 p-2  p-sm-3">
        <div className="container-md mx-auto py-5">
          <div className="col-md-6">
            <h1 className="ff2">DISCOVER THE COLLECTION</h1>
            <h1 className="ff5 mt-3">CITY BIKES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <div className="co-md-12 row">
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
            </div>
            <a href="#">
              <button className="btn1 mt-4">EXPLORE NOW</button>
            </a>
          </div>
        </div>
      </div>

      <div className="bgi4 text-white p-md-5 p-2  p-sm-3">
        <div className="container-md mx-auto py-5">
          <div className="col-md-6">
            <h1 className="ff2">DISCOVER THE COLLECTION</h1>
            <h1 className="ff5 mt-3">SPECIALITY BIKES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <div className="co-md-12 row">
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-6">
                <ul>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Officia deserunt
                    mollit
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Excepteur sint
                    occaecat
                  </li>
                  <li>
                    <i className="fa-solid fa-bullseye"></i>Sunt in culpa qui
                  </li>
                </ul>
              </div>
            </div>
            <a href="#">
              <button className="btn1 mt-4">EXPLORE NOW</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid p-md-5 p-0 py-5 p-sm-1">
        <div className="container-md mx-auto row row-gap-4 text-white p-2 ">
          <h1 className="ff4 text-black text-center">WHY CHOOSE KRYO?</h1>

          <div className="col-md-6 ">
            <div className="bgi5 ">
              <h1 className="ff1">LIGHT WEIGHT</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bgi6">
              <h1 className="ff1">LIFETIME WARRENTY</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bgi7">
              <h3 className="ff2">BIGGEST SERVICE NETWORK</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bgi8">
              <h3 className="ff2">99% ASSEMBLED DELIVERY </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="bgi9">
              <h3 className="ff2">FREE FIRST BIKE SERVICE</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-md-5 p-0 p-sm-1 py-5 py-sm-5">
        <div className="container-md mx-auto p-0 justify-content-center text-center">
          <h1 className="text-center ff4 mb-5">EXPLORE ACCESSORIES</h1>
          <div className="col-md-12 row p-0 m-0 justify-content-center justify-content-sm-start text-start row-gap-4">
            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner14.jpg" alt="" className="img-fluid" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Accessories</p>
              <h6 className="ff3 ">BICYCLE GLOVES BLUE</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$27.00 - $35.00</h6>
              <button className="btn2">L</button>
              <button className="btn2">M</button>
              <button className="btn2">XL</button>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner15.jpg" alt="" className="img-fluid" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Accessories</p>
              <h6 className="ff3 ">BICYCLE GLOVES GOLD</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$30.00 - $50.00</h6>
              <button className="btn2">L</button>
              <button className="btn2">M</button>
              <button className="btn2">XL</button>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner16.jpg" alt="" className="img-fluid" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Accessories</p>
              <h6 className="ff3 ">BICYCLE GLOVES PINK</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$25.00 - $32.00</h6>
              <button className="btn2">L</button>
              <button className="btn2">M</button>
              <button className="btn2">XL</button>
            </div>

            <div className="col-md-3 col-6 col-sm-4">
              <div className="div1">
                <img src="img/banner17.jpg" alt="" className="img-fluid" />
                <button className="div2">
                  <i className="fa-solid fa-cart-shopping "></i>
                </button>
              </div>
              <p className="font mt-2 mb-2">Accessories</p>
              <h6 className="ff3 ">BICYCLE GLOVES RED</h6>
              <p className="font1 mb-1">
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </p>
              <h6 className="font1">$145.00 - $165.00</h6>
              <button className="btn2">L</button>
              <button className="btn2">M</button>
              <button className="btn2">XL</button>
            </div>
          </div>
          <a href="#">
            <button className="btn1 mt-5">VIEW ALL</button>
          </a>
        </div>
      </div>

      <div className="container-fluid bgr p-md-5 py-5">
        <div className="container-md mx-auto row">
          <h1 className="text-center ff4">JOIN #GOECOBIKING PROGRAMME</h1>
          <div className="col-md-12 row mx-auto p-md-5 p-0 pt-2 justify-content-center">
            <div className="bgi10 text-white p-md-5 p-3 align-content-end mb-5">
              <a href="#">
                <button className="btn3 mb-2">
                  <i className="fa-solid fa-play"></i>
                </button>{" "}
              </a>
              <h1 className="ff1">WATCH FULL VIDEO</h1>
            </div>
            <div className="col-md-6 col-12 text-center text-md-start">
              <h1 className="ff1">
                DUIS AUTE IRURE DOLOR IN REPREHENDERIT VELIT.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <div className="col-md-6 col-12 align-content-center text-md-end text-center">
              <a href="#">
                <button className="btn1">JOIN THE PROGRAMME</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bgi11 align-content-center pd">
        <div className="col-md-10 mx-auto text-white text-center p-md-5">
          <h1 className="ff1">THE ALL NEW</h1>
          <h1 className="ff4">KRYO X26 MTB IS HERE</h1>
          <p>
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo.
          </p>
          <button className="btn1">SHOP NOW</button>
        </div>
      </div>

      <Footer/>
    
    </>
  );
}

export default Home;
