import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddPres extends Component {

   constructor(props){
       super(props);
       this.state = {per: [] , drug:[] , pres:[]};
   }


   componentDidMount(){
    fetch('https://localhost:44302/api/Drug')
    .then(response => response.json())
    .then(data => {
      this.setState({drug: data});
    });



    fetch('https://localhost:44302/api/Presciption')
    .then(response => response.json())
    .then(data => {
      this.setState({pres: data});
    });
  }



handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/PresciptionDetail',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Edu_id : null,
      Prescip_id : event.target.Prescip_id.value,
      Name : event.target.Name.value,
      Doze : event.target.Doze.value,
      Duration : event.target.Duration.value
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
               Enter Medicine Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
             <div className = "container">
                <h1>Fill up the fields...</h1>

<br />
                <Row>

                        <Col sm = {6}>
                          <Form onSubmit = {this.handleSubmit}>

                          <Form.Group controlId = "Prescip_id">
                                <Form.Label>
                                Prescription ID 
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.pres.map(doc =>
                                             <option key = {doc.Prescip_id}>{doc.Prescip_id}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>
   
                         
                          <Form.Group controlId = "Name">
                                <Form.Label>
                               Drug Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.drug.map(doc =>
                                             <option key = {doc.Drug_id}>{doc.Name}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "Doze">
                                <Form.Label>
                                Doze
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Doze"  placeholder = "Doze"
                                       required />
                           </Form.Group>

                           <Form.Group controlId = "Duration">
                                <Form.Label>
                                Duration
                                </Form.Label>
                                <Form.Control
                                        type = "text" name = "Duration"
                                       placeholder = "Duration" required />
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

export default AddPres;
