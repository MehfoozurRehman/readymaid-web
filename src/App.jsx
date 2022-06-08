import React from "react";
import "./App.scss";
import left_content_pic from "./assets/back.png";
import left_content_pic_2 from "./assets/back2.png";
import left_content_pic_3 from "./assets/back3.png";
import first_container from "./assets/first_container_img.png";
import first_contaier_logo from "./assets/navbarlogo.png";
import leader from "./assets/leader.png";
import greenback  from "./assets/back_green.png";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      

      {/* third */}
     

      {/* forth */}

     

      {/* / */}

      <div className="all_conainer_main_div">
        <div className="first_container">
          <div className="first_container_img">
            <img className="img_first" src={first_container} alt="" />
          </div>
          <div className="first_container_navbar_div">
            <div className="navbar_div_logo">
              <img className="div_logo" src={first_contaier_logo} alt="" />
            </div>
            <div className="navbar_button">
              <button className="navbar_login">Login</button>
              <button className="navbar_sign">Sign up</button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.387"
                height="30.148"
                viewBox="0 0 42.387 38.148"
              >
                <g id="Homepage" transform="translate(0 0)">
                  <g id="M-Landing-Page" transform="translate(0 0)">
                    <path
                      id="Combined-Shape"
                      d="M377.145,109.79v6.358H334.758V109.79Zm0-16.955v6.358H334.758V92.835Zm0-14.835v6.358H334.758V78Z"
                      transform="translate(-334.758 -78)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="first_container_mid_content">
            <h3 className="mid_content_about">About us </h3>
            <p className="lorem_fisrt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              libero sint enim dolorum aperiam eius doloribus eveniet
              consectetur nulla culpa? Sit ut sint a, fuga mollitia suscipit
              totam quisquam tempora ad similique iste, accusantium, natus
              nostrum consectetur neque autem corrupti architecto dolore id
              libero quis itaque laboriosam. Cumque, deserunt quod?
            </p>
            <div className="mid_content_button">
              <button className="navbar_more">More</button>
              <button className="navbar_service">Services</button>
            </div>
          </div>
        </div>
      </div>

      <div className="second_container">
        <div className="second_container_left_content">
          <div className="left_content_picture">
            <img className="img_back1" src={left_content_pic} alt="" />
          </div>
          <div className="total_s">
            <h3 className="left_content_h1">
              The concept of Readymaid is simple yet powerful
            </h3>
            <ul className="ul">
              <li className="beforeli">
                It is not about creating a marketplace or service providing
                platform but creating an industy that doest exist at all.
              </li>
              <li className="beforeli">
                It is about empowing the most neglected segment of the social
              </li>
              <li className="beforeli">
                It is about provided a corporte expouse and working envirment to
                the ones who can never think about is
              </li>
              <li className="beforeli">
                It is not about creating a marketplace or service providing
                platform but creating an industy that doest exist at all.
              </li>
              <li className="beforeli">
                It is about empowing the most neglected segment of the social
              </li>
            </ul>
          </div>
        </div>
        <div className="second_container_right_content">
          <div className="total_s">
            <h3 className="left_content_h1">Key Factors</h3>
            <ul className="uls">
              <div className="beforeli">
                Unemployment rate of pakistan is 5%.
              </div>
              <div className="beforeli">
                1 out of every 10 persons in the country{" "}
              </div>
              <div className="beforeli">
                It is about provided a corporte expouse and working envirment to
                the ones who can never think about is
              </div>
              <div className="beforeli">
                It is not about creating a marketplace or service providing
                platform but creating an industy that doest exist at all.
              </div>
              <div className="beforeli">
                It is about empowing the most neglected segment of the social
              </div>
            </ul>
          </div>
          <div className="left_content_picture">
            <img className="img_back2" src={left_content_pic_2} alt="" />
          </div>
        </div>
      </div>



      <div className="third_container">
        <div className="third_container_img">
          <img className="img_back3" src={left_content_pic_3} alt="" />
        </div>

        <div className="third_container_mid">
          <h3 className="our_mission">Our mission </h3>
          <p className="lorem100">
          Our mission to create a venture that not only provide ease of processes to consumers, create job opportunities, automate the processes, give back to the society but should also be unique in nature, pioneer in its field and establish not just a company but an industry.{" "}
          </p>
        </div>
      </div>

       <div className="five_main_container">
         <div className="five_main_container_img">
         <img className="green" src={greenback} alt="" />
         </div>
         <div className="left_right">
         <div className="lea">
         <img className="leaders" src={leader} alt="" />

         </div>
         <div className="five_main_container_leader">
           <h1>leader</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio dolore sequi vel necessitatibus eos maxime enim ea? Dolores, id.</p>
           <button>about</button>

         </div>
           
       </div>

         </div>
         

      
      
    </>
  );
  s;
}
