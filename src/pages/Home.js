import React from 'react';
import Logo from "../asseta/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { ImGithub, ImVimeo } from "react-icons/im";


import "../css/Home.css";

function Home() {
  return (
    <div className='test2'>
    
        <div className='Logo'>
        <img  src={Logo}/> 
        </div>
    
    <div className="home">
        <div className='headerContainer'>
            <h1>Hello Friends!</h1>
            <p className='headerP'>Code width passion &#9829;</p>
        </div>

        <div className="sotial-icon">
    <a href='#'><FaFacebookF /></a>
      <a href='#'><ImGithub /></a>
      <a href='#'><ImVimeo /></a>
      <a href='#'><FaFacebookF /></a>
      <a href='#'><ImGithub /></a>
  </div>

  </div>
  </div>
  );
}

export default Home;