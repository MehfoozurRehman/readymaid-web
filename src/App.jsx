import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./screens/Home";
import "./App.scss";
import left_content_pic from "./assets/back.png"
import left_content_pic_2 from "./assets/back2.png"
import left_content_pic_3 from "./assets/back3.png"
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
   
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
       <div className="second_container_right_content">
       <div className="total_s">
         <h3 className="left_content_h1">Key Factors</h3>
         <ul className="uls">
         <div className="beforeli">Unemployment rate of pakistan is 5%.</div>
           <div className="beforeli">1 out of every 10 persons in the country </div>
            <div className="beforeli">It is about provided a corporte expouse and working envirment to the ones who can never think about is</div>
            <div className="beforeli">It is not about creating a marketplace or service providing platform but creating an industy that doest exist at all.</div>
           <div className="beforeli">It is about empowing the most neglected segment of the social</div>
           
  
         </ul>
        
         </div>
         <div className="left_content_picture">
           <img  className="img_back2" src={left_content_pic_2} alt="" />
         </div>
       </div>

     </div>

    

       <div className="third_container">
         <img className="img_back3" src={left_content_pic_3} alt="" />
       </div>

    </>
  );
}
