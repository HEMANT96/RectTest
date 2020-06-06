const errors = this.validate(this.state.ID, this.state.UserName, this.state.Mobile, this.state.Email)
       return(
           <div className="User">
             <div className="App-header">This is My Simple App </div>
               

               <div className="row row-content">
                 <div className="col-8">                  
                  <h3> <b>Fill the Form</b> </h3>
                </div>
                <div className="col-12 col-md-9">
                  <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                       <Label htmlFor="ID" md={4}>
                         ID
                       </Label>
                       <Col md={4}>
                         <Input type="text" id="ID" name="ID"
                         placeholder="ID" value={this.state.ID}
                         onBlur={this.handleBlur('ID')}
                         onChange={this.handleInputChange}/>
                         <FormFeedback>{errors.ID}</FormFeedback>
                         </Col>
                        </FormGroup> 

                    <FormGroup row>
                       <Label htmlFor="UserName" md={4}>
                         UserName
                       </Label>
                       <Col md={4}>
                         <Input type="text" id="UserName" name="UserName"
                         placeholder="UserName" value={this.state.UserName}
                         onBlur={this.handleBlur('UserName')}
                         onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.UserName}</FormFeedback> 
                         </Col>
                     </FormGroup> 

                     <FormGroup row>
                       <Label htmlFor="Mobile" md={4}>
                         Mobile
                       </Label>
                       <Col md={4}>
                         <Input type="text" id="Mobile" name="Mobile"
                         placeholder="Mobile" value={this.state.Mobile}
                         onBlur={this.handleBlur('Mobile')}
                         onChange={this.handleInputChange}
                         />
                         <FormFeedback>{errors.Mobile}</FormFeedback>
                         </Col>
                        </FormGroup>
                    <FormGroup row>
                       <Label htmlFor="Email" md={4}>
                         Email
                       </Label>
                       <Col md={4}>
                         <Input type="text" id="Email" name="Email"
                         placeholder="Email" value={this.state.Email}
                         onBlur={this.handleBlur('Email')}
                         onChange={this.handleInputChange}/>
                        <FormFeedback>{errors.Email}</FormFeedback>
                         </Col>
                     </FormGroup>  
                     <FormGroup row>                       
                       <Col md={{size:6,offset:2}}>
                         <Button type="Submit" color="primary">Submit</Button>
                         </Col>
                     </FormGroup> 
                  </Form>
                </div>
              </div>                    
           </div>
       )