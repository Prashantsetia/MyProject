import React from 'react'
import { Link } from 'react-router-dom'
import './Blogs.css'
export default function BlogSection() {
  return (
    <>
    <a className='link' href="https://www.everlywell.com/blog/std-test-female/health-tips-for-womens-health-week/" style={{textDecoration:"none", color:'#ff75b8'}}>

    <div className='linkdiv' style={{background:"#333333", width:"500px", borderRadius:"10px", overflow:"hidden", margin:"30px"}}>
        <div className='imgsec' style={{width:"100%"}}>
            <img width="100%" src="https://www.starhealth.in/blog/wp-content/uploads/2022/03/7-health-and-fitness-tips-exclusively-for-women.jpg" alt="" />
        </div>
        <div>
            <h1 style={{textAlign:"center"}}>BEST 7 TIPS</h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <p>Author: Prashant</p>
                <p>Health Tips</p>
            </div>
        </div>
    </div>
    </a>
    </>
  )
}
