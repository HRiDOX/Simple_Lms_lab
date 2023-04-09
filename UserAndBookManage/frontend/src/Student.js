import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Student() {
  const [student, setStudent] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err) );
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/student/' + id); 
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return ( 
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>        
      <div className='w-50 bg-white rounded p-3'>            
        <Link to="/create" className='btn btn-success'>Add +</Link> 
        <Link to="/books" className='btn btn-success'>See Books</Link>              
        <table className='table'>                
          <thead>                    
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Fine</th>
              <th>Action</th>
            </tr>                
          </thead>                
          <tbody>
            {Array.isArray(student) && student.map((data, i) => 
              (
                <tr key={i}> 
                  <td>{data.id}</td> 
                  <td>{data.name}</td> 
                  <td>{data.fine}</td>
                  <td>
                    <Link to={`update/${data.id}`} className='btn btn-primary me-2'>Update</Link>&nbsp;                                    
                    <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.id)}>Delete</button>                                
                  </td>                             
                </tr>                        
              ))                    
            }
          </tbody>            
        </table>        
      </div>    
    </div>
  );
}

export default Student;
