import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import home from './views/home';
import dbsensor from './views/dbsensor';
import addroom from './views/addroom';
import updateroom from './views/updateroom';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/datasensor'>Data sensor</Link> </li>
          <li><Link to='/createnewroom'>Create new room</Link> </li>
          <li><Link to='/updateroom'>Update room</Link> </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<home/>}/>
        <Route path="/datasensor" element={<dbsensor/>}/>
        <Route path="/createnewroom" element={<addroom/>}/>
        <Route path="/updateroom" element={<updateroom/>}/>
      </Routes>
    </div>
  );
}

export default App;
