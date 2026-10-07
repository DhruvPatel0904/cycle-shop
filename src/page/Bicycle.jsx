import React from "react";
import Footer from "../components/Footer";
function Bicycle() {
  return (
    <>
      

      <div className="container-fluid bgr p-0 p-sm-3 px-2">
        <div className="p-md-5 mx-auto row justify-content-center">
          <div className="col-md-4 order-md-0 order-1 p-0 py-5 py-md-0">
            <div className="pe-md-4">
              <div className="w-100 bg-white p-md-4 p-3">
                <h6>Search</h6>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input me-2"
                />
                <button className="btn4">SEARCH</button>
              </div>
              <div className="w-100 p-4 bg-white my-md-5 my-3 ff5">FILTERS</div>
              <div className="w-100 p-md-4 p-3 bg-white">
                <h1 className="ff5">FILTER BY CATEGORIES</h1>
                <p className="ms-2 mb-1">
                  <a href="#" className="clr">
                    Accessories
                  </a>{" "}
                  (10)
                </p>
                <p className="ms-2">
                  <a href="#" className="clr">
                    Bicycle
                  </a>{" "}
                  (4)
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-8 p-0 m-0 py-5 py-md-0 ">
            <div className="w-100 p-md-5 py-1 p-sm-3 py-sm-4 mx-auto mx-md-0 row bg-white">
              <div className="w-100 p-0 row mx-auto">
                <p className="clr2">Home/Bicycles</p>
                <h1 className="ff clr1 mb-5">BICYCLES</h1>
                <p className="col-md-6 col-6 clr2 mt-3">
                  Showing all 4 results
                </p>
                <p className="col-md-6 col-6 text-end clr2 mt-3">
                  <select
                    name=""
                    id=""
                    className="border-0 p-1 text-secondary fw-bold"
                  >
                    <option value="">Default sorting</option>
                    <option value="">Sort by poplularity</option>
                    <option value="">Sort by average rating</option>
                    <option value="">Sort by latest</option>
                    <option value="">Sort by price: low to high</option>
                    <option value="">Sort by price: high to low</option>
                  </select>
                </p>
              </div>

              <div className="col-md-12 col-12 row p-0  mx-auto position-relative pb-5">
                <div className="col-md-4 col-6 col-sm-4 mb-3">
                  <div className="div1">
                    <img src="img/banner2.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Bicycles</p>
                  <h6 className="ff3 ">KRYO X26 MTB-MODEL K</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$350.00</h6>
                </div>

                <div className="col-md-4 col-6 col-sm-4 mb-3">
                  <div className="div1">
                    <img src="img/banner20.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Bicycles</p>
                  <h6 className="ff3 ">KRYO X26 MTB-MODEL X</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$350.00</h6>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-3">
                  <div className="div1">
                    <img src="img/banner4.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Bicycles</p>
                  <h6 className="ff3 ">KRYO X26 MTB-MODEL Y</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$350.00</h6>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-3">
                  <div className="div1">
                    <img src="img/banner5.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Bicycles</p>
                  <h6 className="ff3 ">KRYO X26 MTB-MODEL Z</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$350.00</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Footer/>
    </>
  );
}

export default Bicycle;
