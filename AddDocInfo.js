import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddDocInfo extends Component {

   constructor(props){
       super(props);
   }


handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/Doctor_P',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      DoctorFullName : event.target.DoctorFullName.value,
      Gender : event.target.Gender.value,
      DOB : event.target.DOB.value,
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
               Enter your Personal Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
             <div className = "container">
                <h1>Fill up the fields...</h1>

<br />
                <Row>

                        <Col sm = {6}>
                          <Form onSubmit = {this.handleSubmit}>
                           
                           <Form.Group controlId = "DoctorFullName">
                                <Form.Label>
                                  Doctor Full Name
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "DoctorFullName" 
                                      placeholder = "Doctor Full Name" required />
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


                           <Form.Group controlId = "DOB">
                                <Form.Label>
                                DOB
                                </Form.Label>
                                <Form.Control
                                       type = "date" name = "DOB" 
                                       required />
                           </Form.Group>

                           <Form.Group controlId = "Mobile">
                                <Form.Label>
                                Mobile
                                </Form.Label>
                                <Form.Control
                                        type = "text" name = "Mobile"
                                       placeholder = "Mobile Number" required />
                           </Form.Group>

                           <Form.Group controlId = "Email">
                                <Form.Label>
                                Email
                                </Form.Label>
                                <Form.Control
                                       type = "email" name = "Email" 
                                       required placeholder = "@gmail.com" required />
                           </Form.Group>
                <br />
      
                          <Form.Group>
                            <Button variant = "primary" type = "submit">Add your Information</Button>
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

export default AddDocInfo;
