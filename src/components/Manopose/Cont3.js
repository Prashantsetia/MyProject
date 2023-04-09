import React from 'react'

export default function Cont3() {
  return (
    <>
    <div class="container">
      <div id="four">
        <div class="boxL1">
          <h2>Treatment Options</h2>
          <p>
            Menopause requires no medical treatment. Instead, treatments focus
            on relieving your signs and symptoms and preventing or managing
            chronic conditions that may occur with aging. Treatments may
            include:
          </p>
          <ul>
            <li className='list'>Hormone therapy</li>
            <li className='list'>Antidepressants</li>
            <li className='list'>Vaginal estrogen</li>
            <li className='list'>Other medications</li>
          </ul>
          <a
          style={{marginTop:"10px"}}
            href="https://www.mayoclinic.org/diseases-conditions/menopause/diagnosis-treatment/drc-20353401"
            class="button"
            >Learn More</a
          >
        </div>
      </div>
    </div>
    </>
  )
}
