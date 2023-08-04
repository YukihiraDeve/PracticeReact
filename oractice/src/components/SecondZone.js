import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring';

import "../styles/components/SecondZone.css"
import BubbleItem from './BubbleItem';
import logoImage from '../assets/images/logo192.png';
import Hanyang from '../assets/images/Hanyang.png';
import ESGI from '../assets/images/ESGI.jpg'
import MXDATA from '../assets/images/mxdata.jpg'

const SecondZone = () => {
  const [titleProps, setTitleProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0,-50px,0)'
  }));
  const [subtitleProps, setSubtitleProps] = useSpring(() => ({
    opacity: 0,
    transform: 'translate3d(0,50px,0)'
  }));

    const [bubble1Props, setBubble1Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));
    const [bubble2Props, setBubble2Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));
    const [bubble3Props, setBubble3Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));
    const [bubble4Props, setBubble4Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));
    const [bubble5Props, setBubble5Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));
    const [bubble6Props, setBubble6Props] = useSpring(() => ({ opacity: 0, transform: 'translate3d(0,300px,0)' }));

  
  const onVisibilityChange = (isVisible) => {
        if (isVisible) {
          setTitleProps({
            opacity: 1,
            transform: 'translate3d(0,0px,0)'
            
          });
          
          setSubtitleProps({
            opacity: 1,
            transform: 'translate3d(0,0px,0)'
          });



        } else {
          setTitleProps({
            opacity: 0,
            transform: 'translate3d(0,-50px,0)'
          });
          
          setSubtitleProps({
            opacity: 0,
            transform: 'translate3d(0,50px,0)'
          });

        }



  };

  const onVisibilityChangePart2 = (isVisible2) => {
    if(isVisible2){
        setBubble1Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });
        setBubble2Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });
        setBubble3Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });
        setBubble4Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });
        setBubble5Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });
        setBubble6Props({ opacity: 1, transform: 'translate3d(0,0px,0)' });

    } else {
        setBubble1Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
        setBubble2Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
        setBubble3Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
        setBubble4Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
        setBubble5Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
        setBubble6Props({ opacity: 0, transform: 'translate3d(0,50px,0)' });
    }

};

  return (
    <div className="second-zone-container bg-custom text-white py-16">
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div>
          <animated.h2 style={titleProps} className="title text-center font-montserrat text-2xl md:text-6xl font-bold">My Storys</animated.h2>
          <animated.p style={subtitleProps} className="subtitle text-center font-montserrat text-xl md:text-xl font-light mt-4 md:mt-8">Je suis née le 24 février 2002, passionné depuis toujours en informatique, <br></br> j’ai décider de me diriger vers ce domaine dès ma plus tendre enfance</animated.p>
        </div>
      </VisibilitySensor>
      <br />
     <br />
    <br />

    <VisibilitySensor onChange={onVisibilityChangePart2} partialVisibility>
    <div className="bubbles-wrapper">
    <animated.div style={bubble1Props}>
        <BubbleItem logo={ESGI} year="2025" title="Diplomé ESGI" description="Diplomé en tant qu’ingénieur Blockchain"/>
    </animated.div>
    <animated.div style={bubble2Props}>
        <BubbleItem logo={ESGI} year="2023" title="Diplomé ESGI" description="Diplomé en sécurité informatique à l’ESGI"/>
    </animated.div>
    <animated.div style={bubble3Props}>
        <BubbleItem logo={Hanyang} year="2022" title="Echange Universitaire" description="Echange universitaire à Hanyang university en Corée du sud "/>
    </animated.div>
    <animated.div style={bubble4Props}>
        <BubbleItem logo={MXDATA} year="2021" title="Début Alternance" description="Départ de la formation alternance chez MXDATA"/>
    </animated.div>
    <animated.div style={bubble5Props}>
        <BubbleItem logo={ESGI} year="2020" title="Rentrée ESGI Paris" description="Formation initial"/>
    </animated.div>
    <animated.div style={bubble6Props}>
        <BubbleItem logo={logoImage} year="2020" title="Baccalauréat" description="Diplomée Science Développement Durable et Système Information Numérique "/>
    </animated.div>
   </div>
    </VisibilitySensor>
</div>

  );
};

export default SecondZone;
