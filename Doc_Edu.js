import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import { AddDocEdu } from './components/AddDocEdu';



 class Doc_Edu extends Component {

      constructor(props){
        super(props);
        this.state = {edu:[], addDocShow : false}
      }


  componentDidMount(){
    this.refreshList();
  }

   refreshList(){
   fetch('https://localhost:44302/api/DocEducation')
   .then(response => response.json())
   .then(data => {
     this.setState({edu:data});
   })
   }

  componentDidUpdate(){
    this.refreshList();
  }


  render() {

     const {edu} = this.state;
     let adDocClose = () => this.setState({addDocShow: false});
     
    return (
<div>
<br /><br /><br /><br /><br /><br />

<ButtonToolbar>
  <Button variant = 'primary' onClick = {() => this.setState({addDocShow: true})}>
 Add your Education Information
    </Button>
    <AddDocEdu show = {this.state.addDocShow}
      onHide = {adDocClose}
    />
</ButtonToolbar>

  <br /><br />
    <Table className = "mt-5" striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>InstituteName</th>
                  <th>Degree</th>
                  <th>PassingYear</th>
                </tr>
              </thead>

            <tbody>
              {edu.map(doc =>
                <tr key = {doc.Edu_id}>
                   <td>{doc.InstituteName}</td>
                   <td>{doc.Degree}</td>
                   <td>{doc.PassingYear}</td>
                </tr>
                
                )}
            </tbody>
    </Table>


    </div>
    )
  }
}
export default Doc_Edu;