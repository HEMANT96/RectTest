import React, {Component} from 'react';
import {Card, CardBody, CardImgOverlay, CardImg, CardFooter} from 'reactstrap';

class Image extends Component{
 
     renderimage(imag){
        if(imag != null)
        {
          return(
           <div className="container">
           <Card>
              <CardBody>
              <CardImg src={imag.Image} alt="home"/>
              </CardBody>
              <CardImgOverlay>
              <CardFooter>{imag.Describe}</CardFooter>
              </CardImgOverlay>
           </Card>
           </div>
          );
        }
        else {
          return (<div> </div>);  
             }
      }   
    
     renderComments(comments) {
         if(comments != null)
           {
               return(
                 <div className="container">
                   <div className="col-12 col-md-5 m-1">
                       <h4>Comments</h4>
                       <ul className="list-unstyled">
                           {comments.map((comment)=>{
                               return (
                                   <li key={comment.id}>
                                       <p>{comment.comment}</p>
                                   </li>
                               )
                           })}
                       </ul>
                       </div>
                    </div>
               )
        }
     } 
      
    render(){
     if(this.props.imag != null)
        return( 
        <div className="container">
            <div className="row">
                {this.renderimage(this.props.imag)}
                {this.renderComments(this.props.imag.comments)}
                </div>
              </div>
        );
        else{
            return(
                 <div> </div>
            );
        }
    }
}
export default Image;
