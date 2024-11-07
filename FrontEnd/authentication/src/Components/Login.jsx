import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
    <div className='bg-white p-3 rounded w-50'>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">
                    User Login
                </h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter Email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Password</label>
                    <input type="password" name='password' className='form-control' placeholder='Enter Password'/>
                </div>
                <button className='btn btn-primary '>login</button>
                <hr />
                <p>If not registered please go for register Here!!</p>
                <Link to='/register' className='btn btn-primary'>Regster</Link>

            </div>
        </div>
    </div>
</div>
  )
}

export default Login