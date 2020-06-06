import React,{Component} from 'react';
import { Table, Card, CardImg, CardTitle, CardBody, CardFooter} from 'reactstrap';

class User extends Component{
    constructor(props) {
      super(props)
        this.state={
         
       }    
    }

   render(){
     const mob = this.props.mobile.map((mobi)=>{
       return(
         <div key={mobi.ID}> 
         <td>{mobi.Mobile}</td>
         </div>
        );
     })
     const em =this.props.email.map((emils)=>{
       return( 
         <div key = {emils.ID}>
           <td>{emils.Email}</td>
           </div>
       )
     })
    const tab = this.props.users.map((use)=> {
    return(
      <div key={use.ID}>
        <tbody>
          <tr>
           <td>{use.UserName}</td>
         </tr>
        </tbody>
     </div> 
  );
})
const img = this.props.image.map((imag)=> {
  return(
    <div key={imag.ID} className="col-12 md-5">
     <Card onClick={() => this.props.onClick(imag.ID)}>
       <CardTitle>{imag.Name}</CardTitle>
         <CardBody><CardImg src={imag.Image} alt="home"/></CardBody>
       <CardFooter>{imag.Describe}</CardFooter>
    </Card>
   </div> 
);
})
  
   return(
    <div className="container">
      <Table>     
      <thead>
          <tr>
              <th>UserName</th>
              <th>Mobile</th>
              <th>Email</th>
          </tr>
        </thead>
  <tbody>
    <tr>
      <td> {tab} </td>
      <td> {mob}</td>
      <td> {em} </td>
    </tr>
  </tbody>
      </Table>  
      <div>
        {img}
      </div>
      <div className="row">
          </div>
       </div>
     );  
   }
}
export default User; 