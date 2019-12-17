import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddDrug } from './AddDrug';


 class Drug extends Component {

      constructor(props){
        super(props);
        this.state = {drug:[], addDocShow: false}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Drug')
   .then(response => response.json())
   .then(data => {
     this.setState({drug:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {drug} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add Drug Information
    </Button>
    <AddDrug show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Strength</th>
                  <th>Type</th>
                </tr>
              </thead>

            <tbody>
              {drug.map(doc =>
                <tr key ={doc.Drug_id}>
                   <td>{doc.Name}</td>
                   <td>{doc.Strength}</td>
                   <td>{doc.Type}</td>         
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Drug;