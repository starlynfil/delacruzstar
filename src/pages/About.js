import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import aboutpic from "../img/aboutpic.jpg";
import drama from "../img/drama.jpg";
import eating from "../img/eating.jpg";
import church from "../img/church.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container2">
          

            <div id="about-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      About
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

      <section id="carton">
        <div className="container mt-1">
          <div className="col">
            <div className="p-5">
              <div className="row">
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={aboutpic}
                      alt="Profile Picture of Starlyn"
                    />
                  </center>
                  
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary">About Me</h4>
                  <p>
                  I am a graduating student of Bachelor of Science in Information Technology (BSIT) 
                   at the Central Philippines State University. And I am just a boring person.
                   
                  </p>
                  <h4 className="text-primary">My Life Verse</h4>
                  <p>
                  Psalms 18: 28 For thou wilt light my candle, the Lord my God will enlighten my darkness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pb-1 pt-1  ">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-lg-3 text-center"></div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <h2>Education</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-4 text-center ">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-dark">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center ">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                       Bantayan  National High School
                      </h4>
                      <p className="text-dark">
                        Brgy. Bantayan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 text-center mb-5">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                    <FontAwesomeIcon className="i" icon={faCircle} />
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">Bantayan Elementary School</h4>
                      <p className="text-dark">
                        Brgy. Bantayan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Hobbies" className="bg-secondary">
        <svg
          className="heat-waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="heat-wave1">
            <use href="#wave-path" x="50" y="3" fill="rgb(108,117,125)" />
          </g>
          <g className="heat-wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(108,117,125, .5)" />
          </g>
          <g className="heat-wave3">
            <use href="#wave-path" x="50" y="9" fill="rgba(108,117,125, .3)" />
          </g>
        </svg>
        <section id="info">
        <div className="container">
        <div class="section-heading text-center mb-5 fw-bold mt-5">
          <h2>My Hobbies</h2>
        </div>
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={drama} alt="" />
                <h4 className="text-center">Watching dramas</h4>
                <p>
                  I love watching any types of dramas like love story, comedy, crimes and others. Watching
                  dramas is my source of happines when I'm bored.

                </p>
              </div>
            </div>
            
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={eating} alt="" />
                <h4 className="text-center">Eating</h4>
                <p>
                I love to eat when I'm boring and also it depends on my mood. 
                </p>
              </div>
            </div>
           
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
              <img src={church} alt="" />
                <h4 className="text-center">Church Activities </h4>
                <p>
                  I was born in christian family and I grow up in the church. Many actvities in the church 
                  that I'd love to do, like worshipping, youth camp, conference and others that can worship
                  with God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
          <p>
             <span id="displayYear"></span> Copyright By
            <a href="">Starla</a>
          </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
