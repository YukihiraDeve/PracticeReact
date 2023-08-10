import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Photographie from './pages/Photographie';

function App() {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);
  const currentKey = currentLocation.pathname.split("/")[1] || "/";
  const timeoutId = null;

  const transRef = useSpringRef();
  const transitions = useTransition(currentLocation, {
    ref: transRef,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    keys: currentKey
  });

  useEffect(() => {
    transRef.start();
  }, [currentLocation]);

  useEffect(() => {
    // set the current location state whenever location changes
    setCurrentLocation(location);
  }, [location]);

  return transitions((style, item) => (
    <animated.div style={style}>
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/photographie" element={<Photographie />} />
      </Routes>
    </animated.div>
  ));
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default MainApp;
