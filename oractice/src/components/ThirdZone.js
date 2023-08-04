import React from 'react';
import { useSpring, animated } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import "../styles/components/ThirdZone.css"
import Card from './Card';
import LightEffect from './LightEffect';

import logoImage from '../assets/images/logo192.png';

const ThirdZone = () => {
  const [titleProps, setTitleProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0,-50px,0)'
  }));
  const [subtitleProps, setSubtitleProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0,50px,0)'
  }));

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setTitleProps({ opacity: 1, transform: 'translate3d(0,0px,0)' });
      setSubtitleProps({ opacity: 1, transform: 'translate3d(0,0px,0)' });
    } else {
      setTitleProps({ opacity: 0, transform: 'translate3d(0,-50px,0)' });
      setSubtitleProps({ opacity: 0, transform: 'translate3d(0,50px,0)' });
    }
  };

  return (
    
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
    <div className="third-zone-container text-white text-center py-16">
  <animated.h2 style={titleProps} className="title font-montserrat text-2xl md:text-5xl font-bold">
    My projects
  </animated.h2>
  <animated.p style={subtitleProps} className="subtitle font-montserrat text-xl md:text-2xl font-light mt-2 md:mt-8">
    Voici les projets réaliser lors de mon curusus scolaire et en autodidacte.
    <br/>
    <br/>
  </animated.p>
  <div className="cards-container">
 
    <Card
        logo={logoImage}
        title="Gestionnaire de mot de passe"
        description="Projet réaliser en C, il devais contenir une base de donnée, un systèmes graphique, CURL, le programme devais être capable de tourner sous forme de CMD et de GUI."
        />
            <Card
        logo={logoImage}
        title="FPS Game"
        description="Projet réaliser sur Unity, nous devions réaliser un First Personn Shooter, sans librairies externe, nous avons réaliser un parcous auquel nous y trouvions des IA que nous devions tuer avant qu'il vous tue."
        />
            <Card
        logo={logoImage}
        title="Lecteur de QRCODE"
        description="Lecteur de QRCode sur une application Android, réaliser en Java, il devais être capable de lire un QRCode et de l'envoyer sur un serveur. Elle permettais l'authentification des trotinettes électrique."
        />

        <Card
        logo={logoImage}
        title="Plugin Minecraft"
        description="Projet personnel, l'objectif étais d'avoir un plugin capable de définir des règles rapidement. Il devais être capable de gérer les permissions, les commandes, les messages, les kits, tout sa avec une interface in game."
        />
            <Card
        logo={logoImage}
        title="PokePython"
        description="Réaliser un Pokemon en python sans interface graphique. L'objectif étais de nous habituer avec les librairies Numpy et Pandas ainsi que la POO. Nous devions réaliser un jeu de combat avec des pokemons."
        />
            <Card
        logo={logoImage}
        title="ThreeJS Minecraft"
        description="Réalisation d'un Minecraft sur le web, avec ThreeJS, le but étais de réaliser un monde en 3D avec des cubes, et de pouvoir se déplacer dans ce monde."
        />
      

    </div>
    <div className="light-effects-container absolute inset-0 z-0">
      <LightEffect color="#B8F868" top="49vh" left="25vh" />
      <LightEffect color="#F86868" top="64vh" left="45vh" />
      <LightEffect color="#B8F868" top="49vh" left="25vh" />
        <LightEffect color="#F86868" top="64vh" left="45vh" />
        <LightEffect color="#68D5F8" top="20vh" left="70vh" />
        <LightEffect color="#FFFFFF" top="10vh" left="10vw" />
        <LightEffect color="#FF5733" top="10vh" left="10vw" />
        <LightEffect color="#68D5F8" top="80vh" left="25vh" />
        <LightEffect color="#F86868" top="60vh" left="45vh" />
    </div>
    </div>
   




    </VisibilitySensor>










  );
};

export default ThirdZone;
