import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';


export default class Medicine extends Component {
    
    constructor(props){
        super(props);
        this.state = {med:[]}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Drug')
   .then(response => response.json())
   .then(data => {
     this.setState({med:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }



    render() {

        const {med} = this.state;
        
        return (
            <div>
                
<br /><br /><br /><br /><br /><br />

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>DrugName</th>
                  <th>Strength</th>
                  <th>Type</th>
                </tr>
              </thead>

            <tbody>
              {med.map(doc =>
                <tr>
                   <td>{doc.DrugName}</td>
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
