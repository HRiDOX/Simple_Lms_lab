import 'bootstrap/dist/css/bootstrap.min.css'

import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'

import CreateStudent from './CreateStudent';

 import Student from './Student';

import UpdateStudent from './UpdateStudent';
import Book from './Book';
import CreateBook from './CreateBook';
import UpdateBooks from './UpdateBooks';


function App() {
	return (
  <div className="App">      
    <BrowserRouter>        
      <Routes>          
        <Route path='/' element={<Student />}></Route> 
        <Route path='/books' element={<Book />}></Route>          
        <Route path='/create' element={<CreateStudent />}></Route>   
        <Route path='/books/create' element={<CreateBook />}></Route>         
        <Route path='/update/:id' element={<UpdateStudent />}></Route>  
        <Route path='/books/update/:id' element={<UpdateBooks />}></Route>     
     </Routes>      
    </BrowserRouter>    
  </div>);
}
export default App;