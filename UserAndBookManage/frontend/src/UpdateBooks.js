import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBooks() {
    const [name, setName] = useState('');
 
    const [author,setAuthor] = useState('');
    const [semester,setSemester] = useState('');
    const [count,setCount] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:5000/books/update/${id}`, {name, author,semester,count})
      .then(res => {
        console.log(res);
        navigate('/books');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Book</h2>
          <div className='mb-2'>
            <label htmlFor=''>Book Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Author Name</label>
            <input
              type='text'
              placeholder='Enter Author Name'
              className='form-control'
              onChange={e => setAuthor(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Semester</label>
            <input
              type='number'
              placeholder='Enter Semester'
              className='form-control'
              onChange={e => setSemester(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Total Number</label>
            <input
              type='number'
              placeholder='Enter Number Of Books'
              className='form-control'
              onChange={e => setCount(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBooks;
