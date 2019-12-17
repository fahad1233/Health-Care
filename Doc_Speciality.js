import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddSpe } from './components/AddSpe';

 class Doc_Speciality extends Component {

      constructor(props){
        super(props);
        this.state = {spe:[]}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/ProfessionalDetail')
   .then(response => response.json())
   .then(data => {
     this.setState({spe:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {spe} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add your Information
    </Button>
    <AddSpe show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>
  <br /><br /><br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>DoctorFullName</th>
                  <th>Specialization</th>
                </tr>
              </thead>

            <tbody>
              {spe.map(doc =>
                <tr key = {doc.Pro_id}>
                   <td>{doc.DoctorFullName}</td>
                   <td>{doc.Specialization}</td>
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Doc_Speciality;