import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App(){
  return (
    <div className='Main'>
      Curd Operation
      <Create />
      <Read />
      <Update/>
    </div>
  );
}

export default App;