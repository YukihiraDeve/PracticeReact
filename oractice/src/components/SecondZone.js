import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated } from 'react-spring';

import "../styles/components/SecondZone.css"

const SecondZone = () => {
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

  return (
    <div className="second-zone-container bg-custom text-white py-16">
      <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
        <div>
          <animated.h2 style={titleProps} className="title text-center font-montserrat text-2xl md:text-6xl font-bold">My Storys</animated.h2>
          <animated.p style={subtitleProps} className="subtitle text-center font-montserrat text-xl md:text-2xl font-light mt-4 md:mt-8">Je suis née le 24 février 2002, passionné depuis toujours en informatique, j’ai décider de me diriger vers ce domaine dès ma plus tendre enfance</animated.p>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default SecondZone;
