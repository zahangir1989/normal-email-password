import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase';


const auth = getAuth(app);


const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

    const handleRegister = (event) =>{
     event.preventDefault();
     setError('');
     
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form. password.value;
     console.log(name, email,password);
     event.target.reset();
   

     createUserWithEmailAndPassword(auth, email, password)
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess('user is create successfully')
     })
     .catch(error =>{
      console.error(error.message)
      setError(error.message)
     })
    
        }
    return (
        <div className='w-50 mx-auto'>
        <h4 className='text-primary'>Please Register!!!</h4>
             <Form onSubmit={handleRegister}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="Text" name="name" placeholder="Enter name" required />
       
      </Form.Group>  

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required/>
      </Form.Group>
      <p><small>Already have a account? please<Link to="/login">Login</Link></small></p>

      <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
     
            
        </div>
    );
};

export default Register;