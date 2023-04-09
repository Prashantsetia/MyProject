import React from "react";
import {Container ,Card, Col, Button} from 'react-bootstrap'; 
import './custom.css';

function Collaborate(){
    return <div  style={{display:'flex',justifyContent:'center',marginTop:'20vh',alignItems:'center',}} >
  {/* className="shadow border-0 m-2 mb-5 bg-white rounded"style={{width:'12rem',height:'42vh'}} */}
 
  <Col md="4">  
  <Card className="card-component shadow border-0 m-2 mb-5 bg-white rounded">  
  
  <Card.Body className="card-component-body" style={{backgroundColor:'#ADD8E6',}}>  
    <Card.Title>VOLUNTEER</Card.Title>  
    <Card.Text>  
 velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary" style={{backgroundColor:'black',color:'white'}}>JOIN AS A VOLUNTEER</Button>  
  </Card.Body>  
</Card>  
    </Col>  
    <Col md="4">  
  <Card className="shadow border-0 m-2 mb-5 bg-white rounded">  
  
  <Card.Body className="card-component-body" style={{backgroundColor:' #E6E6FA',}}>  
    <Card.Title>THERAPIST</Card.Title>  
    <Card.Text>  
 velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary"  style={{backgroundColor:'black',color:'white'}}>JOIN AS A THERAPIST</Button>  
  </Card.Body>  
</Card>  
    </Col>  

    </div>
}
export default Collaborate;