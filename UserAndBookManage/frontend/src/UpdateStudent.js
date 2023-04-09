import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
    const [name, setName] = useState('');
 
    const [fine,setFine] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`http://localhost:5000/update/${id}`, {name, fine})
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
          <div className='mb-2'>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              className='form-control'
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor=''>Fine</label>
            <input
              type='number'
              placeholder='Enter Fine'
              className='form-control'
              onChange={e => setFine(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
