import React,{Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
class Header extends Component { 
   render(){
    return(
        <div className="Header">
            <div>            
            <Breadcrumb>
                <BreadcrumbItem><Link to="/Table">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/Form">Library</Link></BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
            </div> 
       </div>
    );
  }
}
export default Header;