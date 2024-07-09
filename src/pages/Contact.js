import "./Contact.css";

import Navbar from "./Navbar";
import fb from "../img/fb.png";
import gmail from "../img/gmail.png";
import address from "../img/address.png";
import phone from "../img/phone.png";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">
            <div id="portfolio-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Contacts
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

     
        <section id="info">
          <div className="container">

            <div className="row">
              <div className="col-lg mb-3 mt-1">
                <div className="card p-5 shadow text-center">
                  <img src={fb} alt="" />
                  <a href="https://www.facebook.com/starlynfil.delacruz.1"><h2>Click Here</h2></a>
                </div>
              </div>


              <div className="col-lg mb-3">
                <div className="card p-5 shadow text-center">
                  <img src={gmail} alt="" />
                  <a href="starlynfild@gmail.com"><h2>Click Here</h2></a>
                </div>
              </div>
            </div>
          </div>
        </section>

      <section id="Hobbies" className="bg-secondary">
        <section id="info">
          <div className="container">

            <div className="row">
              <div className="col-lg mb-3 mt-1">
                <div className="card p-5 shadow text-center">
                  <img src={address} alt="" />
                  <h2>Purok 1, Brgy Bantayan Kabankalan City Negros Occidental</h2>
                </div>
              </div>

              <div className="col-lg mb-3">
                <div className="card p-5 shadow text-center">
                  <img src={phone} alt="" />
                  <h2>09955338858</h2>
                </div>
              </div>


            </div>
          </div>
        </section>

      </section>

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
