import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App(){
  return (
    <div className='Main'>
      <h2>Crud Operation</h2>
      <BrowserRouter>
      <Routes>
        <Route exact path ="/Create" element = {<Create />} />
        <Route exact path ="/Read" element = {<Read />} />
        <Route exact path ="/Update" element = {<Update />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;