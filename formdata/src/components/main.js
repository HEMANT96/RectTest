import React, {Component} from 'react';
//import {Table} from 'reactstrap';
//import {USER} from '../shared/Users';
import Table from './Table';
import Header from './Header';
import Form from './Form';
import {Route, Redirect, withRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser} from '../redux/ActionCreators';

const mapStateToProps = state => {    
  return {
      user:state.user,
  }   
}
const mapDispatchToProps = (dispatch) =>({
 addUser:(email, name) => dispatch(addUser(email, name))
});

class Main extends Component{
  
render(){
    return(
         <div className="Main">
           <Header/>
           <Switch> 
           <Route path="/Table"  component={() => <Table user={this.props.user} addUser={this.props.addUser} /> } />
           <Route exact path="/Form" component={() => <Form addUser={addUser} />}/>
           <Redirect to="/Table" />
          </Switch>             
         </div>
      );  
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));