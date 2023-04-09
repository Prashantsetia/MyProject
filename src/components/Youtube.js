import React from 'react'
import '../youtube.css'
import { Fade, Slide } from "react-awesome-reveal";

export default function Youtube() {
  return (
    <>
    <Fade>

      <h1 className='headt' style={{fontSize:'55px', fontWeight:'bold', textAlign:'center', marginTop:'50px', textDecoration:'underline', marginBottom:'20px'}}>Insights of our sessions</h1>
    </Fade>
    
    <div className='cont' style={{marginBottom:'30px'}}>
      <Fade delay={200}>
      <iframe width="1520" height="585" src="https://www.youtube.com/embed/EcqtztE4QrY" title="Menstrual Health & Hygiene" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen  className='vid'></iframe>
        <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe>
        {/* <iframe width="1520" height="585" src="https://www.youtube.com/embed/DxIDKZHW3-E" title="We All Have Mental Health" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className='vid'></iframe> */}
      </Fade>
    </div>
    </>
  )
}
