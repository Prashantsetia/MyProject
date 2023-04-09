import React from 'react'

import './cont2.css'
export default function Cont2() {
  return (
    <>
    <div class="container">
      <div id="three">
        <div class="boxR1">
          <h2>Signs and Symptoms</h2>
          <p>
            Understanding your symptoms may help you discuss the menopause with
            your healthcare professional. Some of the signs are listed below.
          </p>
          <ul>
            <li className='list'>Hot flashes</li>
            <li className='list'>Night sweats</li>
            <li className='list'>Mood changes</li>
            <li className='list'>Vaginal dryness</li>
          </ul>
          <a
          style={{marginTop:"10px"}}
            href="https://www.mayoclinic.org/diseases-conditions/menopause/symptoms-causes/syc-20353397"
            class="button"
            >Learn More</a
          >
        </div>
      </div>
    </div>
    </>
  )
}
