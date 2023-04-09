import React, { Component } from 'react'

import Diet from './Diet';

import { DietData } from './DietData';

import GoToTop from './GoToTop';

export default class DietList extends Component {

  state = {
    tours: DietData
  }

  removeTour = (id)=>{
    console.log("Removing Tour With The Id: " , id);
    
    const filteredData = this.state.tours.filter((item)=>{return id!==item.id});
    this.setState({
      tours: filteredData
    })
  }

  render() {
    return (
      <>
        <div className='cont' style={{padding:'20px'}}>

            {this.state.tours.map((item)=>{
              return <Diet tdata={item} key={item.id} removeTour={this.removeTour}/>
            })}
        </div>
        <GoToTop/>
      </>
    )
  }
}
