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
import aboutUs__img from "./assets/aboutUs__first.png";

export default function App() {
  return (
    <>


      {/* first  */}
    {/* <div className="main__container__first">
    <div className="first_container">
        <img className="about_img" src={aboutUs__img} alt="" />
      </div>

      <div className="navbar_container">
        <div className="svg_container">
          <svg
            className="svg_one"
            xmlns="http://www.w3.org/2000/svg"
            width="70.072"
            height="62.902"
            viewBox="0 0 80.072 72.902"
          >
            <g
              id="Group_4286"
              data-name="Group 4286"
              transform="translate(0 0)"
            >
              <path
                id="Path_9750"
                data-name="Path 9750"
                d="M555.635,389.648h.041l-13.492-23.771h-8.352l9.488,16.7h-9.489L524.1,365.729l-.255.147H492.393V382.9H483.4v-26.02h6.013l48.244.46a16.756,16.756,0,0,0,7.066-2.461l0,0a19.757,19.757,0,0,0,9.777-17.35c.051-10.363-8.154-19.593-18.594-19.817-18.7-.4-37.413-.188-56.12-.326-3.018-.022-3.906,1.3-3.843,4.1.123,5.475.178,10.961-.011,16.432-.116,3.335,1.469,4.086,4.394,4.074,17.257-.069,34.514-.027,51.77-.057,3.095-.005,6.228-.588,6.137-4.482-.085-3.646-3.084-3.961-6.019-3.959q-20.079.014-40.158-.03c-2.372,0-4.744,0-7.34,0l.014-7.554c2.272,0,3.513-.021,5.1-.018,15.481.028,30.966-.093,46.442.227,5.252.108,9.466,4.987,9.99,10.214a11.3,11.3,0,0,1-7.625,12.1,29.125,29.125,0,0,1-8.569,1.039h-.78l.04.023H476.01v40.8h23.771V373.264h20.036l9.2,16.7H556Z"
                transform="translate(-475.925 -317.387)"
                fill="#3cb149"
              />
            </g>
          </svg>
        </div>

        <div className="button_container">
          <button className="login_button">Login</button>
          <button className="sign_button">Sign up</button>
          <div className="button__container__svg">
            <svg
              className="svg_second"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
      </div>
      <div className="first_container_part_two">
        <div>
          <h1 className="about_div">About us</h1>
        </div>
        <p className="lorem_para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            nulla, quasi quisquam esse explicabo, quae debitis iure, itaque
            sapiente blanditiis dolorem architecto incidunt perspiciatis
            deleniti maiores accusamus! Necessitatibus, eius maxime.
          </p>
      </div>
      <div className="button_div_two">
        <button className="button_more">More</button>
        <button className="button_services">Services</button>
        </div>
  
    </div> */}







      {/* 2nd  */}
      {/* <div className="second_container">

       <div className="second_container_left_content">
         <div className="left_content_picture">
           <img  className="img_back1" src={left_content_pic} alt="" />
         </div>
         <div className="total_s">
         <h3 className="left_content_h1">The concept of Readymaid is simple yet powerful</h3>
         <ul className="ul">
            
           <li className="beforeli">It is not about creating a marketplace or service providing platform but creating an industy that doest exist at all.</li>
           <li className="beforeli">It is about empowing the most neglected segment of the social</li>
            <li className="beforeli">It is about provided a corporte expouse and working envirment to the ones who can never think about is</li>
            <li className="beforeli">It is not about creating a marketplace or service providing platform but creating an industy that doest exist at all.</li>
           <li className="beforeli">It is about empowing the most neglected segment of the social</li>
         </ul>
         </div> */}
        
  


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
        <div className="second_container">

       <div className="second_container_left_content">
         <div className="left_content_picture">
           <img  className="img_back1" src={left_content_pic} alt="" />
         </div>
         <div className="total_s">
         <h3 className="left_content_h1">The concept of Readymaid is simple yet powerful</h3>
         <ul className="ul">
            
           <li className="beforeli">It is not about creating a marketplace or service providing platform but creating an industy that doest exist at all.</li>
           <li className="beforeli">It is about empowing the most neglected segment of the social</li>
            <li className="beforeli">It is about provided a corporte expouse and working envirment to the ones who can never think about is</li>
            <li className="beforeli">It is not about creating a marketplace or service providing platform but creating an industy that doest exist at all.</li>
           <li className="beforeli">It is about empowing the most neglected segment of the social</li>
         </ul>
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
