import React, { useState } from 'react'

export default function Form() {

   const [val, setval] = useState('');

    const handle = (event) => {
        event.preventDefault()
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);
        const age = parseInt(event.target[0].value);
              const periods = parseInt(
                event.target[1].value
              );
              const symptoms = event.target[2].value;

              let feedbackText = '';

              if (
                age >= 45 &&
                periods <= 3 &&
                symptoms.includes('hot-flashes')
              ) {
                feedbackText =
                  'Based on your input, you may be experiencing menopause.';
              } else {
                feedbackText =
                  'Based on your input, you may not be experiencing menopause.';
              }

              console.log(feedbackText);
            
              setval(feedbackText);
            
              setTimeout(() => {
                setval(null);
              }, 3000);
      }

      const btnstyle = {
        width: "130px",
        borderRadius: "23px",
        padding: "5px",
        fontSize: "25px",
        fontWeight: "bold",
        background: "aliceblue"
      }

      const hstyle = {
        textAlign: "center",
        background: "gainsboro",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px -2px 50px red",
        fontWeight:'bold',
        marginBottom:"50px"
      }

  return (
    <>
    
    {val && <div class="box" id="feedback" style={hstyle}> <h1>{val}</h1></div>}
    <div className="boxR" style={{background:'pink',width:'70%', margin:'auto',display:'flex',flexDirection:'column',padding:'20px',textAlign:'center', alignItems:'center', marginTop:"50px", marginBottom:'50px'}} onSubmit={handle}>
          <h1 style={{fontSize:'60px',fontWeight:"bold",fontFamily:'fantasy'}}>MENOPAUSE TEST</h1>
          <form className="form-container">
            <div style={{margin:'20px'}} className="formdiv1">
                <h2 className="form-label" for="age">Age:</h2>
                <input style={{padding:'5px'}} type="number" className="form-input" name="age" required />
            </div>

            <div style={{margin:'20px'}}>
                <h2 className="form-label" for="periods"
                >Number of periods in the last year:</h2
                >
                <input style={{textAlign:'center',padding:'5px'}} type="number" className="form-input" name="periods" required />
              </div>

              <div style={{margin:'20px'}}>

            <h2 className="form-label" for="symptoms">Menopause symptoms:</h2>
            <select id="symptoms" style={{padding:'5px'}} className="form-input" name="symptoms" multiple>
              <option value="hot-flashes">Hot flashes</option>
              <option value="night-sweats">Night sweats</option>
              <option value="vaginal-dryness">Vaginal dryness</option>
              <option value="mood-changes">Mood changes</option>
            </select>
              </div>

            <button className="form-submit" style={btnstyle} type='submit'>Submit</button>
          </form>
        </div>
        
    </>
  )
}
