import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar.css'
import logo from '../images/logo11.png'

export default function Navbar() {
    // const naari= (e)=>{
    //     e.preventDefault();
    //     window.location.href = 'https://healthynaari.herokuapp.com/';
    // }
  return (
    <>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='up'>
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <img className='navbar-brand' src={logo} alt="" style={{borderRadius:"20px", width:"170px"}} />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/ward">Women's Ward</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/room">Saheli</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Join Community
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a target={'_blank'} className="dropdown-item" href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338610&extra_1=s|c|547419127631|e|instagram%20%27|&placement=&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9040170%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApb2bBhDYARIsAChHC9t9E63UuEVJ92XxuCbo1uriG3VlHy1EQ2KI3jezZZlEej6U3qiK0moaAhtLEALw_wcB">Instagram</a>
                <div className="dropdown-divider"></div>
                <a target={'_blank'} className="dropdown-item" href="https://discord.com/channels/1036678051653767209/1040637879170379806">Discord</a>
                </div>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
            <Link to="/manpose">
                <button className="btn btn-outline-success my-2 my-sm-0 mx-4">Menopause Test</button>
            </Link>
            
            <Link to="/periods">
                <button className="btn btn-outline-success my-2 my-sm-0">Periods Tracker</button>
            </Link>
            </form>
        </div>
        </nav>
    </>
  )
}
