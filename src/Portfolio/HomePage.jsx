import React from 'react'
import "./portfolio.css"
import Inyene from "./Images/Inyene2.jpg"
import Inyene2 from "./Images/iy.jpg"
import arrow from "./Images/arrow (2).png"
import facebook from "./Images/facebook (1).png"
import instagram from "./Images/instagram.png"
import twitter from "./Images/twitter.png";
import linkedin from "./Images/linkedin.png";
import code from "./Images/code (1).png"
import brush from "./Images/paintbrush (1).png";
import chart from "./Images/signal.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Portfolio() {
   const [texts] = useTypewriter({
      words: ['Frontend Developer', 'Designer', 'Gamer'],
      loop: {},
      typeSpeed: 120,
      deleteSpeed: 110,
   });

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[#191d27]">
        <section className="w-[85%] h-[100%] m-auto" id="first">
          <nav className="w-[100%] h-[10%] flex  bg-[#191d27]">
            <div className="w-[50%] h-[100%] flex items-center">
              <a href="#" className="portfolio">
                Portfolio.
              </a>
            </div>
            <div className="w-[50%] h-[100%] flex items-center justify-evenly">
              <a href="#Home" className="text-[#00ffff]">
                Home
              </a>
              <a href="#About">About</a>
              <a href="#Services">Services</a>
              <a href="#Portfolio">Portfolio</a>
              <a href="#Contact">Contact</a>
            </div>
          </nav>

          <div className="w-[100%] h-[90%] flex items-center ">
            <div className="w-[50%] h-[100%] flex items-center ">
              <div className="w-[100%] h-[fit-content] ">
                <p
                  id="paras"
                  className="text-4xl font-bold text-white mb-[10px]"
                >
                  Hello, It's Me
                </p>
                <p
                  id="parass"
                  className="text-5xl font-bold text-white mb-[15px]"
                >
                  Inyene-Abasi Robson
                </p>
                <p
                  id="parass"
                  className="text-4xl font-bold text-white mb-[20px]"
                >
                  And I'm a {""}
                  <span className="text-4xl text-[aqua]" id="sp">
                    {texts}
                  </span>
                  <span style={{marginLeft:"-10px", fontSize:"35px"}}>
                    <Cursor cursorColor="aqua" />
                  </span>
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  consectetur laboriosam inventore totam commodi, ex quae autem.
                </p>
                <div>
                  <div className="w-[200px] h-[40px]  flex mt-[20px] items-center justify-between">
                    <a
                      href="https://web.facebook.com/inyene.robson.7/"
                      target="_blank"
                    >
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://twitter.com/Robyy2704" target="_blank">
                      <img src={twitter} alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/_justiy_/"
                      target="_blank"
                    >
                      <img src={instagram} alt="" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/inyene-abasi-robson-4a4726267/"
                      target="_blank"
                    >
                      <img src={linkedin} alt="" />
                    </a>
                  </div>
                </div>
                <button className="cv">Download CV</button>
              </div>
            </div>

            <div className="w-[50%] h-[90%] flex justify-center ">
              <img
                className="img"
                src={Inyene2}
                alt=""
                srcset=""
                width={"400px"}
              />
            </div>
          </div>
        </section>
      </div>

      <section className="w-[100%] h-[100vh] bg-[#373c47]" id="About">
        <div className="w-[100%] h-[100%] mt-[30px]">
          <div className="w-[100%] h-[89%] flex items-center ">
            <div className="w-[50%] h-[90%] flex justify-center ">
              <img
                className="img"
                src={Inyene}
                alt=""
                srcset=""
                width={"400px"}
              />
            </div>

            <div className="w-[50%] h-[100%] flex items-center ">
              <div className="w-[100%] h-[fit-content] ">
                <p
                  id="paras"
                  className="text-4xl font-bold text-white mb-[10px]"
                >
                  About{" "}
                  <span className="text-4xl text-[aqua] font-bold">Me</span>
                </p>
                <p
                  id="frontenddev"
                  className="text-3xl font-bold text-white mb-[15px]"
                >
                  Frontend Developer!
                </p>
                <p className="text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat reiciendis alias fugit, illum esse magni aperiam nam
                  voluptatem! Exercitationem animi incidunt reiciendis atque
                  tenetur illum aliquid sed et ullam perferendis ab ducimus eum
                  eaque, suscipit minus quo voluptatem tempore inventore
                  laborum. Enim, aspernatur! Sint et ab, illo quia impedit
                  aspernatur, repellendus voluptatem, culpa quidem itaque ullam
                  tempore reprehenderit dignissimos similique perferendis
                  nesciunt ut repellat esse explicabo vel dolores aut? Alias.
                </p>
                <button className="cv">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] h-[90vh] " id="Services">
        <div className="w-[80%] h-[100%] m-auto">
          <div className="w-[100%] h-[30%]  flex justify-center items-center">
            <p className="text-5xl text-white font-bold">
              My
              <span className="text-5xl text-[aqua] font-bold ml-[10px]">
                Services
              </span>
            </p>
          </div>

          <div className="w-[100%] h-[60%]  flex justify-evenly">
            <div className="w-[29%] h-[100%] text-center" id="services">
              <div className="w-[100%] h-[60px] flex justify-center items-center">
                <img src={code} alt="" />
              </div>

              <p className="text-2xl font-bold text-white mb-[20px]">
                Web Development
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                ipsa adipisci iure, ex aliquam aut nulla quia sapiente, officia
                dolor repellat voluptas.
              </p>
              <button className="cv">Read More</button>
            </div>
            <div className="w-[29%] h-[100%] text-center " id="services">
              <div className="w-[100%] h-[60px] flex justify-center items-center">
                <img src={brush} alt="" width={"45px"} />
              </div>

              <p className="text-2xl font-bold text-white  mb-[20px]">
                Graphic Design
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                ipsa adipisci iure, ex aliquam aut nulla quia sapiente, officia
                dolor repellat voluptas.
              </p>
              <button className="cv">Read More</button>
            </div>
            <div className="w-[29%] h-[100%] text-center" id="services">
              <div className="w-[100%] h-[60px] flex justify-center items-center">
                <div>
                  <img src={chart} alt="" width={"45px"} />
                  <div className="w-[45px] h-[5px] bg-[#00ffff] mt-[3px]"></div>
                </div>
              </div>

              <p className="text-2xl font-bold text-white  mb-[20px]">
                Digital Marketing
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                ipsa adipisci iure, ex aliquam aut nulla quia sapiente, officia
                dolor repellat voluptas.
              </p>
              <button className="cv">Read More</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-[100%] h-[100vh] bg-[#373c47]"
        id="Portfolio"
      ></section>

      <section className="w-[100%] h-[100vh] bg-[#191d27]" id="Contact">
        <div className="w-[50%] h-[100%] m-auto">
          <div className="w-[100%] h-[10%] flex justify-center items-center">
            <p className="text-5xl font-bold text-white">
              Contact{" "}
              <span className="text-5xl font-bold text-[aqua]">Me!</span>
            </p>
          </div>

          <div className="w-[100%] h-[66%] ">
            <div className="mt-[40px]">
              <div className="w-[100%] flex justify-between">
                <div className="w-[49.5%]">
                  <input
                    type="text"
                    name=""
                    id="inpu"
                    placeholder="Full Name"
                    className="bg-[#373c47]"
                  />
                </div>
                <div className="w-[49.5%]">
                  <input
                    type="text"
                    name=""
                    id="inpu"
                    placeholder="Email Address"
                    className="bg-[#373c47]"
                  />
                </div>
              </div>

              <div className="w-[100%] flex justify-between mt-[10px]">
                <div className="w-[49.5%]">
                  <input
                    type="text"
                    name=""
                    id="inpu"
                    placeholder="Mobile Number"
                    className="bg-[#373c47]"
                  />
                </div>
                <div className="w-[49.5%]">
                  <input
                    type="text"
                    name=""
                    id="inpu"
                    placeholder="Email Subject"
                    className="bg-[#373c47]"
                  />
                </div>
              </div>

              <div className="w-[100%] h-[300px]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="yourmessage bg-[#373c47]"
                  placeholder="Your Message"
                />
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[40px] flex justify-center mt-[30px]">
            <button id="cv" className="text-center">
              {" "}
              Send Message
            </button>
          </div>
        </div>
      </section>

      <footer className="foot flex justify-evenly">
        <div className="w-[70%] h-[100%] flex items-center">
          <p className="font-bold text-white ml-[100px]">
            Copyright &#169; 2023 by Codehal | All Rights Reserved.
          </p>
        </div>

        <div className="w-[20%] h-[100%] flex justify-center items-center">
          <a href="first">
            <div
              className="w-[35px] h-[35px] rounded-[5px] bg-[aqua] "
              id="arrow"
            >
              <img src={arrow} alt="" className="m-auto relative top-[10px]" />
            </div>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Portfolio