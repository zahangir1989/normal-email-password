import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebase/firebase';


const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  

    const handleSubmit =(event) =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        event.target.reset();

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          setSuccess('User is successfully Login')
          setError('');
          
        })
        .catch(error =>{
          console.log(error.message)
        })
        
     }
    return (
        <div className='w-50 mx-auto'>
          <h4 className='text-primary'>Please Login!!!!</h4>
             <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
     
      <p><small>new to this webside? please<Link to="/register">Register</Link></small></p>
      <p className='text-success'>{success}</p>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    
            
        </div>
    );
};

export default Login;