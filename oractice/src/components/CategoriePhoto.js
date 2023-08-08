import React, { useState } from 'react';
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from '@react-spring/web';

import '../styles/components/CategoriePhoto.css';

import image1 from '../assets/photos/image1.jpeg';
import image2 from '../assets/photos/image2.jpeg';
import image3 from '../assets/photos/image3.jpeg';
import image4 from '../assets/photos/image4.jpeg';
import image5 from '../assets/photos/image5.jpeg';
import image6 from '../assets/photos/image6.jpeg';
import image7 from '../assets/photos/image7.jpeg';
import image8 from '../assets/photos/image8.jpeg';
import image9 from '../assets/photos/image9.jpeg';
import image10 from '../assets/photos/image10.jpeg';


const data = [
  { id: 1, url: image1 },
  { id: 2, url: image2},
  { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
    { id: 6, url: image6 },
    { id: 7, url: image7 },
    { id: 8, url: image8 },
    { id: 9, url: image9 },
    { id: 10, url: image10 },


];

function CategoriePhoto() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: '20px', background: '#224970' },
    to: {
      size: open ? '100%' : '20px',
      background: open ? 'white' : '#224970',
    },
  });
  
  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);


  //teste
  return (
    <div className="wrapper">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="container"
        onClick={() => set(open => !open)}
      >
        {transition((style, item) => (
          <animated.img
            className="item"
            style={style}
            src={item.url}
            alt="Categorie"
          />
        ))}
      </animated.div>
    </div>
  );
}

export default CategoriePhoto;
