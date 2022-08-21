import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Link, useNavigate} from 'react-router-dom';



const Login = () => {

const emailRef = useRef('');
const passwordRef = useRef('');

const handleSubmit = event => {
  event.preventDefault();
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  
  console.log(email, password);
}
const navigate = useNavigate();

const navigateRegister = event =>{
       navigate('/register');
}

  return (
    <div className="container w-50 border border-primary rounded my-5 p-5 mx-auto" >
      <h2 className="text-primary text-center">Please Login</h2>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to Genius Car <span className="text-danger"  onClick={navigateRegister}> <Link to='/register' className="pe-auto text-decoration-none text-danger">Please Register</Link></span></p>
    </div>
  );
};

export default Login;
