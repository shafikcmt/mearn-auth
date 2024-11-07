import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
  return (
   <div className='d-flex justify-content-center align-items-center vh-100 bg-info'>
        <div className='bg-white p-3 rounded w-50'>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        User Signup
                    </h3>
                </div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' className='form-control' placeholder='Enter Name'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className='form-control' placeholder='Enter Email'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Password</label>
                        <input type="password" name='password' className='form-control' placeholder='Enter Password'/>
                    </div>
                    <button className='btn btn-primary '>Register</button>
                    <hr />
                    <p>If already registered please login Here!!</p>
                    <Link to='/login' className='btn btn-primary'>Login</Link>

                </div>
            </div>
        </div>
   </div>
  )
}

export default Signup