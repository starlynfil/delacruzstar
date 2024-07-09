import "./Experience.css";
import Navbar from "./Navbar";
import grade12 from "../img/grade12.jpg";
import kabilog from "../img/kabilog.jpg"; 
import sonedco from "../img/sonepa.jpg";
import exp from "../img/exp.jpg";






const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container5">
            

            <div id="experience-info" className="bg-secondary bg-gradient">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      My Experiences
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
        
    
           <div className="card">
            <div className="p-5">
              <div className="row">
             
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={grade12}
                      alt="Profile Picture of Kleecil Gualingco"
                    />
                  </center>
                  
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary">My enhancement training in Grade12</h4>
                  <p>
                 During my training when I was grade 12, I do the assemble and dissassemble of system unit,
                 and I done it in 14 munites. 
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="card">
            <div className="p-5">
              <div className="row">
             
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={kabilog}
                      alt="Profile Picture of Starlyn"
                    />
                  </center>
                  
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary">On the Job Training in KABILOG-PA </h4>
                  <p>
                  During my On the job training in Kabilog pa, My first task is to to type the planters name
                   in the excel.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="card">
            <div className="p-5">
              <div className="row">
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={sonedco}
                      alt="Profile Picture of starlyn"
                    />
                  </center>
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary">On the job training in SONEDCO-PA</h4>
                  <p>
                 During my on the job training in SONEDCO-PA, my first task is to incode the name of
                 planters and their amount of sugarcane.
                  </p>
                </div>
              </div>
              </div>
            </div>
            <div className="card">
            <div className="p-5">
              <div className="row">
                <div className="col-lg-5 mb-1">
                  <center>
                    <img
                      src={exp}
                      alt="Profile Picture of Starlyn"
                    />
                  </center>
                </div>
                <div className="col-lg-7 text">
                  <h4 className="text-primary">My Learning Experience</h4>
                  <p>
                 My learning experience during my on th job training is much knowledge on how to handle
                 the works in the office.
                  </p>
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

export default Experience;
