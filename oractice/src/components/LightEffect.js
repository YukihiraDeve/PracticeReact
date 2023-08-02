import React from 'react';



const LightEffect = ({ color = '#B8F868', top, left, right, bottom }) => {
    return (
      <div
        className="rounded-full border border-black absolute"
        style={{
          backgroundColor: color,
          filter: 'blur(62px)',
          width: '27rem',
          height: '27rem',
          opacity: '0.19',
          top: top,
          left: left,
          right: right,
          bottom: bottom,
        }}
      ></div>
    );
  };

  
  
  
export default LightEffect;
