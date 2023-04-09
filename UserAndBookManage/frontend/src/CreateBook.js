import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBook() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
 
  const [author,setAuthor] = useState('');
  const [semester,setSemester] = useState('');
  const [count,setCount] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:5000/books/create', {id,name,author,semester,count})
      .then(res => {
        console.log(res);
        navigate('/books');
      })
      .catch(err => {
        console.log(err)
        navigate('/create');
      });
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Books</h2>
          <div className='mb-2'>
            <label htmlFor=''>Id</label>
            <input
              type='text'
              placeholder='Enter Book Id'
              className='form-control'
              onChange={e => setId(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Book Name</label>
            <input
              type='text'
              placeholder='Enter Book Name'
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
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBook;
