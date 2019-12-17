import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddGeneric } from './AddGeneric';


 class Generic extends Component {

      constructor(props){
        super(props);
        this.state = {gen:[], addDocShow: false}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Generic')
   .then(response => response.json())
   .then(data => {
     this.setState({gen:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {gen} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add Generic Information
    </Button>
    <AddGeneric show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>GenericName</th>
                </tr>
              </thead>

            <tbody>
              {gen.map(doc =>
                <tr>
                   <td>{doc.GenericName}</td>        
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Generic;