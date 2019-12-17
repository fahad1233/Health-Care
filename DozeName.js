import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddPres } from './AddPres';


 class DozeName extends Component {

      constructor(props){
        super(props);
        this.state = {spe:[]}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/PresciptionDetail')
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
    <AddPres show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>
  <br /><br /><br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>Prescription ID</th>
                  <th>Drug ID</th>
                  <th>Doze</th>
                  <th>Duration</th>
                </tr>
              </thead>

            <tbody>
              {spe.map(doc =>
                <tr key = {doc.PresDetail_id}>
                  <td>{doc.Prescip_id}</td>
                  <td>{doc.Drug_id}</td>
                   <td>{doc.Doze}</td>
                   <td>{doc.Duration}</td>
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default DozeName;