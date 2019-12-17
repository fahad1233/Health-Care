import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddDocInfo } from './components/AddDocInfo';



 class Doc_personal extends Component {

      constructor(props){
        super(props);
        this.state = {per:[], addDocShow: false}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Doctor_P')
   .then(response => response.json())
   .then(data => {
     this.setState({per:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {per} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add your Information
    </Button>
    <AddDocInfo show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>DoctorFullName</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>
              </thead>

            <tbody>
              {per.map(doc =>
                <tr key = {doc.Doctor_id}>
                   <td>{doc.DoctorFullName}</td>
                   <td>{doc.Gender}</td>
                   <td>{doc.DOB}</td>
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
export default Doc_personal;