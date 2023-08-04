import React, { useState, useEffect } from 'react';
import yourImage from '../assets/images/moi2.png';
import LightEffect from './LightEffect';
import "../styles/components/Flipped.css"
import { useSpring, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

const words = ["Développeur 💻", "Photographe 📸", "DevOPS 🧑🏼‍💻"];

const FirstZone = () => {
    

        const [index, setIndex] = useState(0);
        const [text, setText] = useState('');
        const [imageProps, setImageProps] = useSpring(() => ({
            opacity: 1,
            transform: 'translate3d(0,50px,0)'
        }));
      
        useEffect(() => {
          setIndex(0);
          setText('');
        }, []);

        const onVisibilityChange = (isVisible) => {
        
            if (isVisible) {
              setImageProps({
                opacity: 1,
                transform: 'translate3d(0,0px,0)'
              });
            } else {
              setImageProps({
                opacity: 0,
                transform: 'translate3d(0,50px,0)'
              });
            }
        }
      
        useEffect(() => {
          const typeEffect = () => {
            let word = words[index];
            let tempText = '';
            let typing = setInterval(() => {
              if (tempText.length < word.length) {
                tempText += word.charAt(tempText.length);
                setText(tempText);
              } else {
                clearInterval(typing);
                setTimeout(() => setIndex((prevIndex) => (prevIndex + 1) % words.length), 4000);
              }
            }, 100);
          };
          
          if (index < words.length) {
            typeEffect();
          }
      
          return () => {
            setText('');
          };
        }, [index]);
      
  

  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div className="flex flex-col-reverse md:flex-row justify-between items-stretch w-full bg-[#30689C] p-0 m-0 h-screen">
            <div className="text-section flex flex-col justify-center w-full md:w-1/2 space-y-4 md:space-y-8 p-6 sm:p-12">
                <h1 className="text-white font-montserrat text-4xl md:text-8xl font-bold">Hey 👋🏻<br />Welcome :)</h1>
                <p className="text-white font-montserrat text-2xl md:text-4xl font-light m-0">
                    Je m’appelle Valentin,
                <br />
                Et je suis <span className="typewriter-text">{text}</span>
                </p>
            </div>

        <LightEffect color="#FF5733" top="10vh" left="10vw" />
        <LightEffect color="#B8F868" top="49vh" left="25vh" />
        <LightEffect color="#F86868" top="64vh" left="45vh" />
        <LightEffect color="#68D5F8" top="20vh" left="70vh" />
        <LightEffect color="#A768F8" top="0vh" left="90vh" />
        <LightEffect color="#A43265" top="90vh" left="0vh" />
        <LightEffect color="#FFAFF0" top="0vh" left="50vh" />
        <animated.div
          className="image-section w-full md:w-1/2 h-[50vh] md:h-[100vh] flex-shrink-0 bg-no-repeat bg-center m-0 p-0"
          style={{
            ...imageProps,
            backgroundImage: `url(${yourImage})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
          }}
        ></animated.div>      
        </div>
    
    </VisibilitySensor>

    );



};

export default FirstZone;
