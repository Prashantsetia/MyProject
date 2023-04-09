import React from 'react'
import abutimg from '../images/aboutus.png'
import ab from '../images/ab.png'
import { Fade, Slide, Flip } from "react-awesome-reveal";

import GoToTop from './Diet/GoToTop';
function About() {
  let st = {
    background: "#daffff",
    padding: "20px",
    textAlign: "center",
    color: "black",
    borderTopLeftRadius: "60px",
    borderBottomRightRadius: "60px",

  }
  return (
    <>
      <div className="container aboutCont">    
      <Fade delay={100}>
      <img src={abutimg} className="abtimg" alt="" style={{width:"35%",display:"block", margin:"auto"}}/>
        </Fade>
        <Fade delay={200}>
        <div style={st} className="txtdiv">
          <h1>OUR OBJECTIVE</h1>
        <p style={{color: "black", fontSize:"20px"}}>Healthynaari is a curated solution which will help women from different parts of country to combat the disparity amongst PCOS and this platform will also help in spreading the awareness of various issues of women who have little or NIL information, the app does the early detection of pcos with an efficient UI(early detection of pcos with an accessible UX). It includes QnA with the patient in a form of a quiz to fulfill and predict the best med/Gynae.</p>
        </div>
          </Fade> 

        <Slide >

        <div style={{display:"flex"}} className="abBox2">
          <div className='abdiv1'>
            <img src={ab} alt="" style={{width: "499px"}} />
          </div>
          <div  className='abdiv2' style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>Our Mission Is To Positively Transform Women's Health Condition</h2>
            <ul>
              <li>Saheli: Get Connect With Lady Doctors</li>
              <li>Shakti: Periods Tracker</li>
              <li>Online PCOS Test</li>
              <li>Women Health Related Blogs</li>
              <li>Youtube Recorded Sessions</li>
            </ul>
          </div>
        </div>
        </Slide>
      </div>

      <GoToTop/>
    </>
  )
}

export default About