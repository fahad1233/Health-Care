import React, { Component } from 'react'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class AddDrug extends Component {

   constructor(props){
       super(props);
       this.state = { brand:[] , gen : [] };
   }


componentDidMount(){
  fetch('https://localhost:44302/api/Generic')
  .then(response => response.json())
  .then(data => {
    this.setState({gen: data});
  });


  fetch('https://localhost:44302/api/Brand')
  .then(response => response.json())
  .then(data => {
    this.setState({brand: data});
  });
}



handleSubmit(event){
  event.preventDefault();

  fetch('https://localhost:44302/api/Drug',{
    method:'POST', 
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      Drug_id : null,
      GenericName : event.target.GenericName.value,
      Name : event.target.Name.value,
      Strength : event.target.Strength.value,
      Type : event.target.Type.value
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

                          <Form.Group controlId = "GenericName">
                                <Form.Label>
                                Generic Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.gen.map(doc =>
                                             <option key = {doc.GenericID}>{doc.GenericName}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "BrandName">
                                <Form.Label>
                                Brand Name
                                </Form.Label>
                                <Form.Control as = "select">
                                         {this.state.brand.map(doc =>
                                             <option key = {doc.BrandID}>{doc.BrandName}</option>
                                          )}
                                </Form.Control>
                           </Form.Group>

                           <Form.Group controlId = "Name">
                                <Form.Label>
                                Drug Name
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Name" 
                                      placeholder = "Drug Name" required />
                           </Form.Group>

                           <Form.Group controlId = "Strength">
                                <Form.Label>
                                Strength
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Strength" 
                                      placeholder = "Strength" required />
                           </Form.Group>

                           <Form.Group controlId = "Type">
                                <Form.Label>
                                Type
                                </Form.Label>
                                <Form.Control
                                       type = "text" name = "Type" 
                                      placeholder = "Type" required />
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

export default AddDrug;
