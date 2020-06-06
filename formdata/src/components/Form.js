import React, { Component } from 'react';
import {Label, Button, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Form1 extends Component {
    constructor(props){
      super(props)   
      this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(values){
  console.log("Current State is:" + JSON.stringify(values));
  this.props.addUser(values.email, values.name); 
}

render() {
  return (
  <div className="row row-content">
    <LocalForm className="col-12 my-4 mx-20" onSubmit={(values) => this.handleSubmit(values)}>
      <Row className="col-12">
      <Row className="form-group col-4">
        <Label htmlFor="email">Email</Label>
        </Row>
        <Row className="form-group col-6">
        <Control.text model=".email" name = "email" id="email" placeholder="Email" 
         className="form-control"
         validators={{
           required, validEmail    
          }}
         />
    <Errors 
        className="text-danger"
        model=".email"
        show="touched"
        messages={{
          required:'Required ',
          validEmail:'Invalid Email Address'
        }}       
        />
      </Row>
      </Row>
      <Row className="col-12">
     <Row className="form-group col-4">
        <Label htmlFor="name">Name</Label>
        </Row>
     <Row className="form-group col-6">
        <Control.text model=".name" name="name" id="name" placeholder="User name"
        className="form-control"        
        validators={{
          required, minLength:minLength(3), maxLength:maxLength(15) ,isNumber
        }}
        />
     <Errors 
        className="text-danger"
        model=".name"
        show="touched"
        messages={{
          required:'Required ',
          minLength:'Must be greater than 2 characters',
          maxLength:'Must be 15 characters or less',
          isNumber: 'Must be a number'
        }}
       
        />
    </Row>
      </Row>
      <Button md={{size:6, offset:2}}>Submit</Button>
    </LocalForm>
  </div>
  );
 }
}
export default Form1;