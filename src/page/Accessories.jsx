import React from "react";
import Footer from "../components/Footer";
function Accessories() {
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
              <div className="w-100 p-4 bg-white my-md-5 my-3 row m-0">
                <h1 className="ff2 p-0">FILTERS</h1>
                <h1 className="ff2 p-0"> PRICE</h1>
                <input type="range" className="input1 mb-4 p-0" />
                <div className="col-md-6 p-0">
                  <p>$25</p>
                </div>
                <div className="col-md-6 p-0 text-end">
                  <p>$225</p>
                  <button className="btn4">APPLY</button>
                </div>
              </div>
              <div className="w-100 p-md-4 p-3 bg-white">
                <h1 className="ff2">FILTER BY CATEGORIES</h1>
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
                <p className="clr2">Home/Accessories</p>
                <h1 className="ff clr1 mb-5">ACCESSORIES</h1>
                <p className="col-md-6 col-6 clr2 mt-3">
                  Showing all 10 results
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
                    <img src="img/banner14.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE GLOVES BLUE</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$27.00 - $35.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4 col-6 col-sm-4 mb-3">
                  <div className="div1">
                    <img src="img/banner15.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE GLOVES GOLD</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$27.00 - $35.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner16.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE GLOVES PINK</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$27.00 - $35.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner17.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE GLOVES RED</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$145.00 - $165.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner21.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE GLOVES YELLOW</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$30.00 - $40.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner22.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE HELMET BLUE</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$125.00 - $135.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner23.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE HELMET GREEN</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$135.00 - $160.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner24.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE HELMET PINK</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$180.00 - $200.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner25.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE HELMET RED</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$200.00 - $225.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
                </div>

                <div className="col-md-4  col-6 col-sm-4 mb-5">
                  <div className="div1">
                    <img src="img/banner26.jpg" alt="" width="100%" />
                    <button className="div2">
                      <i className="fa-solid fa-cart-shopping "></i>
                    </button>
                  </div>
                  <p className="font mt-2 mb-2">Accessories</p>
                  <h6 className="ff3 ">BICYCLE HELMET SKY BLUE</h6>
                  {/* <p className="font1 mb-1">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </p> */}
                  <h6 className="font1">$150.00 - $175.00</h6>
                  <button className="btn2">L</button>
                  <button className="btn2">M</button>
                  <button className="btn2">XL</button>
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

export default Accessories;
