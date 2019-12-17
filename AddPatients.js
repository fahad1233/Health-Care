import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddPatients extends Component {

   constructor(props){
       super(props);
   }



handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/Patient_P',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Patient_id : null,
      PatientFullName : event.target.PatientFullName.value,
      Gender : event.target.Gender.value,
      Age : event.target.Age.value,
      Height : event.target.Height.value,
      Weight : event.target.Weight.value,
      IsMarried : event.target.IsMarried.value,
      Mobile : event.target.Mobile.value,
      Email : event.target.Email.value
    })
  })
}

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               Enter Your Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
             <div className = "container">
                <h1>Fill up the fields...</h1>

<br />
                <Row>

                        <Col sm = {6}>
                          <Form onSubmit = {this.handleSubmit}>

                   <Form.Group controlId = "PatientFullName">
                                <Form.Label>
                                PatientFullName
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "PatientFullName" 
                                      placeholder = "Patient Full Name" required />
                           </Form.Group>

                          <Form.Group controlId = "Gender">
                                <Form.Label>
                                Gender
                                </Form.Label>
                                <Form.Control as = "select">   
                                             <option>Male</option>
                                             <option>Female</option>
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "Age">
                                <Form.Label>
                                Age
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Age" 
                                      placeholder = "Age" required />
                           </Form.Group>

                           <Form.Group controlId = "Height">
                                <Form.Label>
                                Height
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Height" 
                                      placeholder = "Height" required />
                           </Form.Group>

                           <Form.Group controlId = "Weight">
                                <Form.Label>
                                Weight
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Weight" 
                                      placeholder = "Weight" required />
                           </Form.Group>

                           <Form.Group controlId = "IsMarried">
                                <Form.Label>
                                Marrital Status
                                </Form.Label>
                                <Form.Control as = "select">   
                                             <option>Married</option>
                                             <option>Unmarried</option>
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "Mobile">
                                <Form.Label>
                                Mobile Number
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Mobile" 
                                      placeholder = "Mobile Number" required />
                           </Form.Group>

                           <Form.Group controlId = "Email">
                                <Form.Label>
                                Email Address
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Email" 
                                      placeholder = "@gmail.com" required />
                           </Form.Group>
                       
                <br />
      
                          <Form.Group>
                            <Button variant = "primary" type = "submit">Submit</Button>
                          </Form.Group>


                          </Form>
                        </Col>

                </Row>
             </div>



            </Modal.Body>
           
          </Modal>
        );
    }
}

export default AddPatients;
