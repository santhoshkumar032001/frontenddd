import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';
import logo from './logo1.jpg';
import Header from './Header';
import Footer from './Footer';

function Login() {
    const [values, setValues]= useState({
        email:'',
        password:''
    })
const [errors,setErrors] =useState({

})
const handleInput =(event) => {
    setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
}
    const handleSubmit =(event)=> {
        event.preventDefault(); 
        setErrors(Validation(values));
    }

  return (
   
    <div className=''>
        <Header/>
        
   
        <div className='bg-white p-3 rounded w-80 d-flex justify-content-center align-items-center bg-dark bg-gradient vh-70' style={{}}>
        
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
            <img src={logo} alt="Logo" className='d-flex justify-content-center align-items-center vh-50 rounded w-25' style={{margin:"9px"}}></img>
       
                <label htmlFor='email' style={{padding:"6px"}}><strong>Email</strong></label>
                <input type="email" placeholder='Enter your mail' name='email'
                 onChange={handleInput} className='form-control rounded-0'/>
                 {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor='password'style={{padding:"6px"}}><strong>Password</strong></label>
                <input type="password" placeholder='Enter your password' name='password'
                  onChange={handleInput} className='form-control rounded-0'/>
                  {errors.password && <span className='text-danger tp-4'>{errors.password}</span>}
            </div>
            <button type='submit'className='btn btn-success w-100 rounded-4'><strong>Login</strong></button>
           
        
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-4 text-decoration-none' style={{marginTop:"20px"}}>Create Account</Link>


        </form>
     </div>
     <Footer/>  
    </div>
  )
}

export default Login
