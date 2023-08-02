import React, { useState, useEffect } from 'react';
import yourImage from '../assets/images/moi.jpg';
import LightEffect from './LightEffect';
import "../styles/components/Flipped.css"

const words = ["Développeur", "Photographe", "DevOPS"];

const FirstZone = () => {
    const [index, setIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFadeIn(false);
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
          setFadeIn(true);
        }, 500);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-stretch w-full bg-[#30689C] p-0 m-0 h-screen">
    <div className="text-section flex flex-col justify-center w-full md:w-1/2 space-y-4 md:space-y-8 p-6 sm:p-12">
      <h1 className="text-white font-montserrat text-4xl md:text-8xl font-bold">Hey<br />Welcome :)</h1>
      <p className={`text-white font-montserrat text-2xl md:text-4xl font-light m-0 `}>
        Je m’appelle Valentin,
        <p>
          Et je suis <span className={`${fadeIn ? 'fade-in' : 'fade-out'}`}> {words[index]}</span>
        </p>
      </p>
    </div>

      <LightEffect color="#FF5733" top="10px" left="50px" />
      <LightEffect color="#B8F868" top="800px" left="200px" />
      <LightEffect color="#F86868" top="900px" left="900px" />
      <LightEffect color="#68D5F8" top="100px" left="1000px" />
      <LightEffect color="#A768F8" top="100px" left="2000px" />

      <div
        className="image-section w-full md:w-1/2 h-[50vh] md:h-[100vh] flex-shrink-0 bg-no-repeat bg-center m-0 p-0"
        style={{
          backgroundImage: `url(${yourImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
        }}
      ></div>
    </div>

  );
};

export default FirstZone;
