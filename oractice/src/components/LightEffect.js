import React, { useState, useEffect } from 'react';

const LightEffect = ({ color = '#B8F868', top, left }) => {
  const [position, setPosition] = useState({ top: `${top}vh`, left: `${left}vw` });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTop = parseFloat(position.top);
      const currentLeft = parseFloat(position.left);
      const newTopValue = Math.min(Math.max(currentTop + (Math.random() * 10 - 5), 0), 90); // Limite entre 0 et 90
      const newLeftValue = Math.min(Math.max(currentLeft + (Math.random() * 10 - 5), 0), 90); // Limite entre 0 et 90
      const newTop = newTopValue + 'vh'; 
      const newLeft = newLeftValue + 'vw';
      setPosition({ top: newTop, left: newLeft });
    }, 50); // change la position toutes les 50ms

    return () => clearInterval(interval);
  }, [position]);

  return (
    <div
      className="rounded-full border border-black absolute transition-all duration-1000 ease-in-out"
      style={{
        backgroundColor: color,
        filter: 'blur(5vw)',
        width: '10vw',
        height: '10vw',
        opacity: '0.7',
        ...position,
      }}
    ></div>
  );
};

export default LightEffect;
