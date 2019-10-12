import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <div className="leftside d-flex justify-content-center align-items-center">
              <div>
                <div className="search">
                <br></br>
                  <h3>For Buyers</h3>
                  <br></br>
                  <h1>
                    Google for <br></br>suppliers
                  </h1>
                  <br></br>
                  <h5>Search by company name,category,products or services</h5>
                  <br></br>
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        name="search"
                        id="exampleEmail"
                        placeholder=""
                        style={{borderRadius: "35px"}}
                      />
                    </FormGroup>
                    <div className="but">
                  <Button color="success" style={{borderRadius: "35px"}}>Search</Button>
                  </div>
                 
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 no-gutters">
            <div className="rightside d-flex justify-content-center align-items-center">
              <div className="register">
              <br></br>
                <h3>For suppliers</h3>
                <br></br>
                <h1>
                  Register & get <br></br> discovered
                </h1>
                <br></br>
                <Form>
                  <FormGroup>
                    <Input
                      type="email"
                      name="companyname"
                      id="exampleEmail"
                      placeholder="Company name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>
                  <div className="but">
                  <Button color="success" style={{borderRadius: "35px"}}>Register</Button>
                  </div>
                 
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
