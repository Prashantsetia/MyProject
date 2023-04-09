import React from 'react'
import '../components/collage.css'
import ac1 from '../images/ac1.png'
import ac2 from '../images/ac2.png'
import ac3 from '../images/ac3.png'
import ac4 from '../images/ac4.png'
import ac5 from '../images/ac5.png'
function Collage() {
  return (
    <>
        <div class="contaner">
        <div class="item">
            <img src={ac1} alt="" />
        </div>
        <div class="item item-flex">
            <img class="item-flex-img-big" src={ac2} alt="" />
            <img class="item-flex-img" src={ac3} alt="" />
        </div>
        <div class="item item-flex">
        <img class="item-flex-img" src={ac4} alt="" />
            <img class="item-flex-img-big" src={ac5} alt="" />
            
        </div>
        </div>
    </>
  )
}

export default Collage