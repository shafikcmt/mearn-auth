import React from 'react'

function AddBlog() {
  return (
    <>
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Add Post</h5>
            </div>
            <div className="card-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Title</label>
                    <input type="text" className="form-control" placeholder='Add Title' />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Add Description</label>
                   <textarea placeholder='Add Description' className='form-control'></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Add Image</label>
                    <input type="file" className="form-control" />
                </div>
               
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddBlog