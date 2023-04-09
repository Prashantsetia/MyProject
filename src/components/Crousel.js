import React from 'react'
// import crimg from '../images/Illustration.png'
import '../crousel.css'
import { Zoom} from "react-awesome-reveal";
import { Link } from 'react-router-dom'
export default function Crousel() {
    const goToLinkedIn= ()=>{
        window.location.href = 'https://www.linkedin.com/in/saday-sadev-1b97511b2/?originalSubdomain=in';
    }
    const tweetBtn= ()=>{   
        window.location.href = 'https://twitter.com/sadaysadev';
    }
  return (
    <>
    <div className="crcontainer" style={{width:'100%', height:'500px'}}>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                        <Zoom>

                            <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                        </Zoom>
                        <h1 style={{color:'white'}} className="inboxname">DIET</h1>
                        <h3 style={{color:'yellow'}}>(Diet Plans)</h3>
                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3 style={{fontSize:'20px'}}>A healthy diet is essential for women's health, and it should include a variety of nutrient-rich foods such as fruits, vegetables, whole grains, lean protein, and healthy fats. Women should consume adequate amounts of calcium and vitamin D to maintain strong bones, iron-rich foods to support their menstrual cycle, and folate to prevent birth defects. </h3>
                        </div>
                        <Link to='/diet'><button className='btn btn-primary'>EXPLORE DIET</button></Link>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                    <Zoom>
                        <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                    </Zoom>
                        <h1 style={{color:'white'}} className="inboxname">CONSULTATION</h1>
                        <h3 style={{color:'yellow'}}>(Find Nearby Doctors)</h3>
                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3 style={{fontSize:'20px'}}>Our website now offers an offline doctor consultation feature for your convenience. With this service, you can easily book an appointment with a qualified physician and have a face-to-face consultation in-person. Say goodbye to long wait times and phone calls, and say hello to personalized, convenient healthcare.</h3>
                        </div>
                        <div className='btnboxthree'>
                            <button className='btn btn-primary' onClick={()=> window.open("https://www.google.com/search?q=oncologist+near+me&oq=oncologist+mnear+&aqs=chrome.1.69i57j0i13i457j0i402j0i13j0i13i395l6.9088j1j7&sourceid=chrome&ie=UTF-8") } type='button' style={{margin:'10px'}}>Find Oncologist</button>
                            <button className='btn btn-primary' onClick={()=> window.open("https://www.google.com/search?ei=S8AWYLvEDuGc4-EP_-GD4A4&q=gynecologist+near+me&oq=gy+near+me&gs_lcp=CgZwc3ktYWIQARgBMgYIABAHEB4yBg" )}style={{margin:'10px'}}>Find Gynecologist</button>

                            <button className='btn btn-primary' onClick={()=> window.open("https://www.google.com/search?ei=oMAWYK2OLPWD4-EPnbuu2AQ&q=therapist+near+me&oq=therapist+near+me&gs_lcp=CgZwc3ktYWIQAzIG")} style={{margin:'10px'}}>Find Therapist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="carousel-itemtwo">

                    <div className="lbox" style={{width:'40%', height: '100%', overflow:'hidden', borderRadius:'40px',display:'flex', justifyContent:'center', alignItems:'center', backgroundImage:'Url("https://wallpaperaccess.com/full/270183.jpg")', flexDirection:'column'}}>
                        
                    <Zoom>
                        <img src="https://raahee.in/static/media/RaaheeLogo.46bb0c1e.png" alt="" style={{width:'100px'}}/>
                    </Zoom>

                        <h1 style={{color:'white'}} className="inboxname">SAHELI</h1>
                        <h3 style={{color:'yellow'}}>(Online Consultation)</h3>

                    </div>

                    <div className="btnbox">
                        <div style={{width:'78%'}}>
                            <h3 style={{fontSize:'20px'}}>Introducing "Saheli" - our revolutionary online doctor consultation feature for your healthcare needs. With Saheli, you can easily connect with licensed medical professionals from the comfort of your own home. Say goodbye to long wait times and inconvenient in-person appointments.</h3>
                        </div>
                        <Link to='/room'><button className='btn btn-primary'>Explore Saheli</button></Link>
                    </div>
                </div>
            </div>
      
            {/* <div className="carousel-item">
            <img className="d-block w-100" src='...' alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src='...' alt="Third slide"/>
            </div> */}
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    </div>
    </>
  )
}
