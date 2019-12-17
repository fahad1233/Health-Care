import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddPrescription from './components/AddPrescription';



 class Prescription extends Component {

      constructor(props){
        super(props);
        this.state = {pres:[]}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Presciption')
   .then(response => response.json())
   .then(data => {
     this.setState({pres:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {pres} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>

<br /><br /><br /><br /><br /><br />
<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add Prescription
    </Button>
    <AddPrescription show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>
  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>Prescip_id</th>
                  <th>Date</th>
                  <th>BP</th>
                  <th>Temp</th>
                  <th>Weight</th>
                  <th>Visit_no</th>
                  <th>NextDate</th>
                  <th>Indication</th>
                </tr>
              </thead>

            <tbody>
              {pres.map(doc =>
                <tr key = {doc.Prescip_id}>
                  <td>{doc.Prescip_id}</td>
                   <td>{doc.Date}</td>
                   <td>{doc.BP}</td>
                   <td>{doc.Temp}</td>
                   <td>{doc.Weight}</td>
                   <td>{doc.Visit_no}</td>
                   <td>{doc.NextDate}</td>
                   <td>{doc.Indication}</td>
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Prescription;