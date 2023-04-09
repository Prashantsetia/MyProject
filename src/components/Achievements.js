import React from 'react'
// import achimg from '../images/achiv1.png'
// import achimg from '../images/achiv2.png'
import wimg from '../images/pngwing.com (34).png'
import '../components/achivment.css'

function Achievements() {
    var obj = {
        boxShadow: "0px 5px 37px grey",
        padding: "15px",
        borderRadius: "90px",
        margin:"190px"
    }
    
    var stobj = {
      padding: "7px",
      textDecoratiom:"none",
      borderRadius: "11px",
      outline: "none",
      display: "block",
      margin: "auto",
      cursor: "pointer",
      border: "0",
      boxShadow: "0px 0px 16px blue"
  }

  return (
    <>
    <div style={obj} className="schemebox">
            <h1 style={{textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>WOMEN HEALTH SCHEMES INDIA</h1>
        <div className="schemebox-insidebox" style={{width:"70%", margin:"auto", boxShadow:"gray 0px 0px 63px", borderRadius:"46px", padding:"27px"}}>

          <img style={{width:'30%',display:'block',margin:'auto',borderRadius:'100%'}} src="https://women-corner.web.app/signbg.0ab1f5450d033d14abfa.gif" alt="" />
          {/* <a href=""><h3>Chiranjeevi Yojana</h3></a>
          <p>An innovative partnership with the private sector obstetricians to provide skilled care at birth to the poor in Gujarat</p> */}
          <a href=""><h3>Shakti Yojana</h3></a>
          <p>The scheme is for pregnant women to access Government health facilities for their delivery.</p>
          <a href=""><h3>Kasturba Poshan Sahay Yojana (KPSY)</h3></a>
          <p>The objective of this study was to assess the Kasturba Poshan Sahay Yojana. The specific objectives were (i) To assess the health services provided to the beneficiary of Kasturba Poshan Sahay Yojana.</p>
          <a href=""><h3>Women Helpline Scheme</h3></a>
          <p>The Women Helpline is intended to provide 24 hours immediate response to women affected by violence through referral linking with appropriate authority such as police, One Stop Centre, hospital.</p>
          <a target={'_blank'} href="https://vikaspedia.in/schemesall/schemes-for-women-schemesall/schemes-for-pregnancy-womens"><button className='btn-primary' style={stobj}>Explore More</button></a>
          </div>

        {/* <img className='mybtn' src={wimg} alt="" style={{width:"7%",display:"block",margin:"auto", marginTop:"20px"}} /> */}
    </div>
    </>
  )
}

export default Achievements