import React, {useState} from 'react'
import axios from 'axios'

function AddBlog() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('title',title);
        formData.append('description',description);
        formData.append('image',image);

        try{
            const result = axios.post('http://localhost:3000/addPost/',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(result.data)
            setMsg('Blog Uploaded Successfully!')
        }catch(err){
            setMsg('Failed to Blog Upload!!')
        }

    }
  return (
    <>
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">Add Post</h5>
            </div>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Title</label>
                    <input type="text" className="form-control" placeholder='Add Title' onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Add Description</label>
                   <textarea placeholder='Add Description' className='form-control' onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Add Image</label>
                    <input type="file" className="form-control" name='image' onChange={(e) => setImage(e.target.files[0])} />
                </div>
               
               
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default AddBlog