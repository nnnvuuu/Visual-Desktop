import React, { Component } from 'react';
import {Container,Col,Row,Card,Form,Button,Alert}from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';  
import {register} from '../../redux/actions/authAction';
import {clearErrors} from '../../redux/actions/errorAction';



class SignUpPage extends Component {
  constructor(props){
    super(props);
   this.state ={
    email:'',
    username:'',
    password:'',
    passwordCheck:'',
    msg:null,
  }
  // This binding is necessary to make `this` work in the callback
  this.onChangeHandler = this.onChangeHandler.bind(this);
  this.onSubmitHandler = this.onSubmitHandler.bind(this);
}
  
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register:PropTypes.func.isRequired,
    clearErrors:PropTypes.func.isRequired,
  }

  componentDidUpdate(prevProps){
    const { error,isAuthenticated} = this.props;
    if(error !== prevProps.error){
      //check for register error
      if(error.id === 'REGISTER_FAIL'){
        this.setState({msg: error.msg.msg});
      }
      else{
        this.setState({msg: null});
      }
    }

    // if authenticated, redirect to login page
    // if(isAuthenticated){
      
     // window.location = "http://localhost:3000/Login";
    // }  
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }

  onSubmitHandler(e) {
    e.preventDefault();
    
   
  
    const {username,email,password,passwordCheck} = this.state;

   
    //create user object
    const newUser = {
      username,
      email,
      password,
      passwordCheck
    }

    this.props.register(newUser);

    
  }


  render() {
    return (
     <div>
       <NavBar/>
       <Container style={{width:"50em"}}>
          <Card
           className = "mt-5"
            bg = "light" 
            text="dark"
            border="dark"
            >
              <Card.Header className="text-center">
                <h1>Sign up for a new Account</h1>
              </Card.Header>
              <Card.Body>
                 <Form className="mt-3 text-center" onSubmit={this.onSubmitHandler}>
                 {console.log(this.state.msg)}
                   {this.state.msg ?<Alert variant="danger">
                   {"* "+this.state.msg} </Alert>:null}
                  <Form.Group>
                    <Form.Row>
                      <Col>
                       <Form.Label>Email</Form.Label>
                        <Form.Control
                         className="text-center" 
                         type="email"
                         name ="email"
                         id = "email"
                         placeholder="Enter email"
                         onChange={this.onChangeHandler}
                          />
                      </Col>
                      <Col>
                      <Form.Label>Username</Form.Label>
                        <Form.Control 
                        className="text-center"
                         type="username" 
                         name ="username"
                         id = "username"
                         placeholder="Enter username"
                         onChange={this.onChangeHandler}
                         />
                      </Col>
                    </Form.Row>
                   </Form.Group>
                   <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                         className="text-center" 
                         type="password" 
                         name ="password"
                         id = "password"
                         placeholder="Enter password"
                         onChange={this.onChangeHandler}
                         />
                   </Form.Group>
                   <Form.Group className="mt-4">
                        <Form.Control
                         className="text-center" 
                         type="password" 
                         name ="passwordCheck"
                         id = "passwordCheck"
                         placeholder="Enter password again"
                         onChange={this.onChangeHandler}
                         />
                   </Form.Group>
                   <Button className="mt-4"
                    variant="dark"
                    type="submit"
                    block
                    onClick={this.onSubmitHandler}
                    >
                      Join now
                   </Button>
                   <hr className="mt-5"></hr>
                   <h5>Already have an account?</h5>
                   <Link to="Login">
                        <Button variant="dark">Sign in </Button> 
                     </Link>
                </Form>
              </Card.Body>
          </Card>
       </Container>
      </div>
    );
  }
}

const mapStateToProps = state  =>({
  isAuthenticated : state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps,{register,clearErrors}) (SignUpPage);