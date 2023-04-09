import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Book() {
  const [book, setBook] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/books')
    .then(res => setBook(res.data))
    .catch(err => console.log(err) );
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:5000/books/' + id); 
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return ( 
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>        
      <div className='w-50 bg-white rounded p-3'>            
        <Link to="/books/create" className='btn btn-success'>Add Books+</Link>   
        <Link to="/" className='btn btn-success'>Home</Link>            
        <table className='table'>                
          <thead>                    
            <tr>
              <th>Id</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Semester</th>
              <th>Count</th>
              <th>Action</th>
            </tr>                
          </thead>                
          <tbody>
            {Array.isArray(book) && book.map((data, i) => 
              (
                <tr key={i}> 
                  <td>{data.id}</td> 
                  <td>{data.name}</td> 
                  <td>{data.author}</td>
                  <td>{data.semester}</td>
                  <td>{data.count}</td>
                  <td>
                    <Link to={`/books/update/${data.id}`} className='btn btn-primary me-2'>Update</Link>&nbsp;                                    
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

export default Book;
