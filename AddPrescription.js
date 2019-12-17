import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import Prescription from '../Prescription';


export class AddPrescription extends Component {

   constructor(props){
       super(props);
       this.state = {pat:[],per:[]};
   }

   componentDidMount(){
    fetch('https://localhost:44302/api/Patient_P')
    .then(response => response.json())
    .then(data => {
      this.setState({pat: data});
    });



    fetch('https://localhost:44302/api/Doctor_P')
    .then(response => response.json())
    .then(data => {
      this.setState({per: data});
    });
  }
  
  

handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/Presciption',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        Prescip_id : null,
        Date : event.target.Date.value,
        BP : event.target.BP.value,
        Temp : event.target.Temp.value,
        Weight : event.target.Weight.value,
        Visit_no : event.target.Visit_no.value,
        NextDate : event.target.NextDate.value,
        Indication : event.target.Indication.value
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
               Enter Prescription Information
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
                                Patient Full Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.pat.map(doc =>
                                             <option key = {doc.PatientFullName}>{doc.PatientFullName}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>

                           
                          <Form.Group controlId = "DoctorFullName">
                                <Form.Label>
                                Doctor Full Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.per.map(doc =>
                                             <option key = {doc.DoctorFullName}>{doc.DoctorFullName}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>
                        
                           <Form.Group controlId = "Date">
                                <Form.Label>
                                Date
                                </Form.Label>
                                <Form.Control
                                       type = "date" name = "Date" 
                                         required />
                           </Form.Group>

                           <Form.Group controlId = "BP">
                                <Form.Label>
                                BP
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "BP"  placeholder = "BP"
                                       required />
                           </Form.Group>

                           <Form.Group controlId = "Temp">
                                <Form.Label>
                                Temp
                                </Form.Label>
                                <Form.Control
                                        type = "text" name = "Temp"
                                       placeholder = "Temp" required />
                           </Form.Group>

                           <Form.Group controlId = "Weight">
                                <Form.Label>
                                Weight
                                </Form.Label>
                                <Form.Control
                                        type = "text" name = "Weight"
                                       placeholder = "Weight" required />
                           </Form.Group>

                           <Form.Group controlId = "Visit_no">
                                <Form.Label>
                                Visit_no
                                </Form.Label>
                                <Form.Control
                                        type = "number" name = "Visit_no"
                                       placeholder = "Visit_no" required />
                           </Form.Group>

                           <Form.Group controlId = "NextDate">
                                <Form.Label>
                               Next Date
                                </Form.Label>
                                <Form.Control
                                       type = "date" name = "NextDate" 
                                         required />
                           </Form.Group>

                           <Form.Group controlId = "Indication">
                                <Form.Label>
                                Indication
                                </Form.Label>
                                <Form.Control
                                        type = "text" name = "Indication"
                                       placeholder = "Indication" required />
                           </Form.Group>

                <br />
      
                          <Form.Group>
                            <Button variant = "primary" type = "submit">Add Prescription</Button>
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

export default AddPrescription;
