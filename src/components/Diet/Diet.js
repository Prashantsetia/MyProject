import React, { Component } from 'react'

import './diet.css'

export default class Diet extends Component {
  
  constructor(props){
    super(props);
    
    this.state={
      showInfo: false,
      showCross: false
    }
  }

  btnStyle = {
    // color:'red',
    color: '#82b340',
    cursor:'pointer'
  }
  
  handleInfo = ()=>{
    this.setState({
      showInfo: !this.state.showInfo
    })
  }


  render() {
    console.log(this.props);

    const {city,place,img,info,id} = this.props.tdata;

    const {removeTour} = this.props;

    return (
      <div className='tour-main'>
        <div className='tour-inner-div1' onMouseEnter={()=>{this.setState({showCross:true})}} onMouseLeave={()=>{this.setState({showCross:false})}}>

            <img src={img} alt="" />
            
            {/* Conditional rendering of X */}
            {this.state.showCross && <span>
               <i class="fa-sharp fa-solid fa-square-xmark mark" style={{cursor:'pointer'}} onClick={()=>{removeTour(id)}} ></i>
               </span>}
        </div>
        <div className='tour-inner-div2'>
            <h1>{city}</h1>
            {/* <h3>{place} Tour</h3> */}
            <button style={{marginBottom:'25px',fontSize:'15px'}} className='btn btn-primary' onClick={()=> window.open("https://www.medicalnewstoday.com/articles/best-diet-for-women#mind-diet")}>Find More</button>
            <h4>Info: <i class="fa-sharp fa-solid fa-caret-down" style={this.state.showInfo?this.btnStyle:{cursor:'pointer'}} onClick={this.handleInfo}></i></h4>
            {/* <button style={this.state.showInfo?this.btnStyle:{cursor:'pointer'}} type='button' onClick={this.handleInfo}>Info</button> */}

            {this.state.showInfo && <p>{info}</p>}
        </div>
      </div>
    )
  }
}
