import React from 'react'
import '../../src/homepage.css'
// import Footer from './Footer'
// import Navbar from './Navbar'
// import fimage from '../images/coding.png'
import img2 from '../images/pngwing.com (31).png'
import img3 from '../images/pngwing.com (32).png'
// import buddha from '../images/Vector (2).png'
// import buddha from '../images/pngwing.com (18).png'
import Crousel from './Crousel'
import Youtube from './Youtube'
import Achievements from './Achievements'
import { Fade, Slide, Zoom } from "react-awesome-reveal";
// import Collage from './Collage'

export default function HomePage() {
  return (
    <>
    {/* <Navbar/> */}

      <div className="firstcontainer">
          {/* <h1>This is me</h1> */}

          <Slide delay={100}>
            <div className="fimage">
              <img  src={img2} alt="" className='fimg'/>
            </div>
          </Slide>

          <Fade>

          <div className="writable">
            <h1 className='sadayswrite' style={{fontSize:'100px', fontWeight:'bold', textShadow:"2px 2px 14px hotpink"}}>HealthyNaari</h1>
            <div className="box2">
              <h2 className='sadayswrite' style={{textShadow:"black 1px 0px 16px"}}>Aaj Se Hoga India<br /> <h1 style={{fontSize:'60px'}}>Healthy</h1></h2>
              <Zoom>

              <img src={img3} style={{width:'150px'}} alt="" />
              </Zoom>
            </div>
          </div>
          </Fade>
      </div>

      <Crousel/>
      <Achievements/>
      {/* <Collage/> */}
      <Youtube/>

    </>
  )
}
