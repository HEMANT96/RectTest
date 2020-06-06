import React, {Component} from 'react';
import Users from './User.js';
//import {IMAGE} from '../shared/Imagedetail';
import Imagedetails from './Imagedetails.js'
import {IMAGE} from '../ shared/Imagedetail'
import {USERS} from '../ shared/Users';
import {EMAIL} from '../ shared/Email';
import {MOBILE} from '../ shared/Mobile';
class Main extends Component{
  constructor(props){
    super(props);

    this.state = { 
      image:IMAGE,  
      users:USERS,
      email:EMAIL,
      mobile:MOBILE,
      selectedImage: null,
    }
  }
  Onimageselect(imagId){
      this.setState(
        {
          selectedImage:imagId
        }
        );
    }; 
  
    render() {
      return (
      <div className="Main">
        <Users users={this.state.users} email={this.state.email} mobile={this.state.mobile} image={this.state.image} 
        onClick = {(imagId) => this.Onimageselect(imagId)}/>
        <Imagedetails imag={this.state.image.filter((imag)=> imag.ID === this.state.selectedImage)[0]}/>
         </div>   
      );
    }
}
export default Main;