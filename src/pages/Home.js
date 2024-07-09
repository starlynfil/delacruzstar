import "./Home.css";

import homepic from "../img/homepic.jpg";



import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>
      <div className="wrapper">
        <div className="overlay">
          <div class="container1">
            

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold">
                        Starlyn Fil Dela Cruz
                      </h1>
                      <p>
                        Taking up a Bachelor of Science in Information Technology
                        </p>
                        <p>
                       Delight thy self in the Lord, and He shall give thee the desire of thine heart.
                        </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={homepic}
                        alt="Profile Picture of Starlyn"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg
        className="sea-waves"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="sea-wave1">
          <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
        </g>
        <g className="sea-wave2">
          <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .5)" />
        </g>
        <g className="sea-wave3">
          <use href="#wave-path" x="50" y="9" fill="rgba(255,255,255, .3)" />
        </g>
      </svg>

      <section id="info">
      <div className=" mt-5">
        </div>
          <div className="container">
           <center> <h1>My Verses</h1></center>

            <div className="row">
              <div className="col-lg mb-3 mt-1">
                <div className="card p-5 shadow text-center">
                <p>James 4:10 Humble yourself in the sight of the Lord, and he shall lift you up.</p>
                </div>
              
              </div>

              <div className="col-lg mb-3 mt-1">
                <div className="card p-5 shadow text-center">
                  <p>Philippians 4: 19 But my God shall suplly all your need according to
                    his riches in glory by Christ Jesus.
                  </p>
                </div>
              </div>

              <div className="col-lg mb-3  mt-1">
                <div className="card p-5 shadow text-center">
                  <p>Matthew 6:33 But seek ye first the kingdom of God, and his righteousness
                    and all these thing shall be added unto you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="info">
        <div className=" mt-5"></div>
          <div className="container">

            <div className="row">
              <div className="col-lg mb-3 mt-1">
                <div className="card p-5 shadow text-center">
                  <p>Proverbs 3:5 Trust in the Lord with all thine heart; and lean 
                    not unto thine own understanding.
                  </p>
                </div>
              
              </div>

              <div className="col-lg mb-3  mt-1">
                <div className="card p-5 shadow text-center">
                  <p>Psalms 23:1 The Lord is my sheperd I shall not want.</p>
                </div>
              </div>

              <div className="col-lg mb-3  mt-1">
                <div className="card p-5 shadow text-center">
                  <p>Nahum 1:7 The Lord is good a stronghold in the day of trouble. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
          <p>
             <span id="displayYear"></span> Copyright By
            <a href=""> Starla</a>
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
