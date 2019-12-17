import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddSpe extends Component {

   constructor(props){
       super(props);
       this.state = {per: [] };
   }


   componentDidMount(){
    fetch('https://localhost:44302/api/Doctor_P')
    .then(response => response.json())
    .then(data => {
      this.setState({per: data});
    });
  }

  

handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/ProfessionalDetail',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Pro_id : null,
      DoctorFullName : event.target.DoctorFullName.value,
      Specialization : event.target.Specialization.value
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
               Enter your Specialization Information
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
                                Doctor Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.per.map(doc =>
                                             <option key = {doc.Doctor_id}>{doc.DoctorFullName}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "Specialization">
                                <Form.Label>
                                Specialization
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Specialization" 
                                       placeholder = "Specialization" required />
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

export default AddSpe;
