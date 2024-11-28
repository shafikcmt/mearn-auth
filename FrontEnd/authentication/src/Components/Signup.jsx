import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navigation from './Navigation';
function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate()


    const handleRegister = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/register/',{name,email,password})
        .then(result => {
            console.log(result)
            if(result.data === 'success'){
                setMsg('User Registered Successfully!!');
                setTimeout(()=>{
                    navigate('/login')
                },2000)
            }else{
                setMsg('Something is wrong!!');
            }
           
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='container'>
    <Navigation />
   <div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
        <div className='bg-white p-3 rounded w-50'>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        User Signup
                    </h3>
                </div>
                <div className="card-body">
                    {
                        msg ? (
                            <div className='alert alert-success'>{msg}</div>
                        ):""
                    }
                    <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className='form-control' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Password</label>
                        <input type="password" name='password' className='form-control' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className='btn btn-primary '>Register</button>
                    </form>
                    <hr />
                    <p>If already registered please login Here!!</p>
                    <Link to='/login' className='btn btn-primary'>Login</Link>

                </div>
            </div>
        </div>
   </div>
   </div>
  )
}

export default Signup