import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import AddBlog from './addBlog';

function Dashboard() {
  return (
    <div className='container'>
      <Navigation />
      <div className="row">
        <div className="col-md-3">
          <div className="container-fluid p-2">
          <ul className="list-group">
            <Link className="list-group-item">Add Blog</Link>
          </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="container-fluid p-2">
          <AddBlog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard