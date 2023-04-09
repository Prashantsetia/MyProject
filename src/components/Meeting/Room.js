import React from 'react';
// import Header from "../Home/Header";
// import Footer from "../Home/Footer";
import './Room.css';

import GoToTop from '../Diet/GoToTop';

const Room = () => {
  return (
    <>
    <div className='whereby'>
      
      <iframe   width="1000"
        height="500"src="https://healthynaari.whereby.com/sahelic7c14d78-5475-4246-ada9-bb824a360ff0" allow="camera; microphone; fullscreen; speaker; display-capture" style={{height: "100vh", width: "100%"}}></iframe>
      {/* <iframe
        width="1000"
        height="500"
        src="https://whereby.com/saday-sadev?utm_source=onboarding&utm_content=link"
        allow="camera; microphone; fullscreen; speaker"
      ></iframe> */}
    </div>

    <GoToTop/>
        </>
  )
}

export default Room
