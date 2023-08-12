import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './views/home';
import DataSensorPage from './views/dbsensor';
import CreateRoomPage from './views/addroom';
import UpdateRoomPage from './views/updateroom';

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
        <Route path="/" element= {<HomePage />}/>
        <Route path="/datasensor" element={<DataSensorPage /> }/>
        <Route path="/createnewroom" element={<CreateRoomPage /> }/>
        <Route path="/updateroom" element={<UpdateRoomPage /> }/>
      </Routes>
    </div>
  );
}

export default App;
