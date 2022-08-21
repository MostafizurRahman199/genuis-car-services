import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event =>{
           navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (


        <div className='mx-auto container w-50 border my-5 p-5 border-primary rounded'>
            <h2 className='text-center mt-3 text-primary'>Please Register</h2>
        <Form onSubmit={handleRegister} >
        <Form.Group className="mb-3" controlId="formBasicEmail">

       
          <Form.Label>Name</Form.Label>
          <Form.Control  type="text" name="name" placeholder="Enter your name" />
          <Form.Text className="text-muted">
           
          </Form.Text>
          <br></br>

          <Form.Label>Email address</Form.Label>
          <Form.Control  type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <p>Already have an account?<span className="text-danger"  onClick={navigateLogin}> <Link to='/register' className="pe-auto text-decoration-none text-danger">Please Login</Link></span></p>
        </div>
    );
};

export default Register;