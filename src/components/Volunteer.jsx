import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Volunteer(){
    return <div style={{ display: 'inline-block', 
    width: 500, 
    padding: 30 }}>
<h4>JOIN AS A VOLUNTEER</h4>
<Form>
<Form.Group className="mb-4">

<Form.Control type="text" 
          placeholder="Enter your full name"required />
</Form.Group>
<Form.Group className="mb-4">

<Form.Control type="text" 
          placeholder="Enter your Last name" required />
</Form.Group>
<Form.Group className="mb-4">

<Form.Control type="email" 
          placeholder="Enter your your email address" required/>
</Form.Group>
<Form.Group className="mb-4">

<Form.Control type="number" 
          placeholder="Enter your phone number"required />
</Form.Group>
<Form.Group className="mb-4" >

<span><Form.Control type="text" placeholder="Enter your role:(Therapist/volunteer)" required/></span>
</Form.Group>
<Form.Group className="mb-4">


<div className="input-group">

        <div className="input-group-prepend">
            
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload 
          </span>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          
        </div>
      </div>
      </Form.Group >
<Button variant="primary" type="submit">
Click here to submit form
</Button>
</Form>
</div>
}
export default Volunteer;