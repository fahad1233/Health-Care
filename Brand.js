import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddBrand } from './AddBrand';



 class Brand extends Component {

      constructor(props){
        super(props);
        this.state = {brand:[], addDocShow: false}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/Brand')
   .then(response => response.json())
   .then(data => {
     this.setState({brand:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {brand} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add Brand Information
    </Button>
    <AddBrand show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                 
                  <th>BrandName</th>
                </tr>
              </thead>

            <tbody>
              {brand.map(doc =>
                <tr>
                 
                   <td>{doc.BrandName}</td>         
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Brand;