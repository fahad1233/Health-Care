import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddPatients } from './AddPatients';


 class Patients extends Component {

      constructor(props){
        super(props);
        this.state = {pat:[]}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Patient_P')
   .then(response => response.json())
   .then(data => {
     this.setState({pat:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {pat} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add patients Information
    </Button>
    <AddPatients show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>PatientFullName</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Height</th>
                  <th>Weight</th>
                  <th>IsMarried</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>

            <tbody>
              {pat.map(doc =>
                <tr key = {doc.Patient_id}>
                   <td>{doc.PatientFullName}</td>
                   <td>{doc.Gender}</td>
                   <td>{doc.Age}</td>
                   <td>{doc.Height}</td>
                   <td>{doc.Weight}</td>
                   <td>{doc.IsMarried}</td>
                   <td>{doc.Mobile}</td>
                   <td>{doc.Email}</td>
                
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Patients;