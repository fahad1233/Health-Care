import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddGeneric extends Component {

   constructor(props){
       super(props);
   }


handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/Generic',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        GenericID :  null,
        GenericName : event.target.GenericName.value
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
               Enter Medicine Generic Information
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
             <div className = "container">
                <h1>Fill up the fields...</h1>

<br />
                <Row>

                        <Col sm = {6}>
                          <Form onSubmit = {this.handleSubmit}>
                           
                           <Form.Group controlId = "GenericName">
                                <Form.Label>
                                Generic Name
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "GenericName" 
                                      placeholder = "Generic Name" required />
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

export default AddGeneric;
