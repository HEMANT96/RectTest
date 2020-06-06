import React from 'react';
import {Table} from 'reactstrap';
//import {USER} from '../shared/Users';

function RenderUser({uses, addUser})
{
  return(  
        <Table> 
              <td> {uses.ID}    </td>
              <td> {uses.Name}  </td>
              <td> {uses.Email} </td>
              <td> {addUser} </td>
           </Table>
     );
}  
//  const mob = this.props.mobile.map((mobi)=>{
const Table1 = (props) => {

  const use = props.user.map((uses) => {
    return(
       <div key={uses.ID}>    
          <RenderUser uses={uses} addUser={props.addUser}
            />      
       </div>
    );
  });
       return(
<div className="Main">
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
     <td> {use} </td>
   </tr>
  </tbody>
     </Table>  
</div>
       );
   }
  
export default Table1;