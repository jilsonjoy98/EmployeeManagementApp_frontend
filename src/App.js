import './App.css';
import { Route,Routes } from 'react-router-dom';
import Admin from './components/Admin';
import Add from './components/Add';
import View from './components/View';
import Edit from './components/Edit';
import Pagenotfound from './components/Pagenotfound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Admin/>} />
        <Route path='add' element={<Add/>} />
        <Route path='edit/:id' element={<Edit/>} />
        <Route path='view/:id' element={<View/>} />
        <Route path='*' element={<Pagenotfound/>} />


      </Routes>
    
    </div>
  );
}

export default App;
