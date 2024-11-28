import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navigation from './Navigation';

function Login() {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [msg,setMsg] = useState('');
    const naviagte = useNavigate()
const handleLogin = (e)=>{
    e.preventDefault()  
    axios.post('http://localhost:3000/login/',{email,password})
    .then(result =>{
        console.log(result);
        if(result.data === 'success'){
            setMsg('User login successfully!!');
            setTimeout(()=>{
                naviagte('/dashboard')
            },2000)
        }else{
            setMsg('Someting is wrong!!');
        }
       
    })
}

  return (
    <div className='container'>
    <Navigation />
    <div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
    <div className='bg-white p-3 rounded w-50'>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                    User Login
                </h3>
            </div>
            <div className="card-body">
            {
                msg ? (
                    <div className='alert alert-success'>{msg}</div>
                ):""
            }
                <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type='submit' className='btn btn-primary '>login</button>
                </form>
                <hr />
                <p>If not registered please go for register Here!!</p>
                <Link to='/register' className='btn btn-primary'>Regster</Link>

            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Login