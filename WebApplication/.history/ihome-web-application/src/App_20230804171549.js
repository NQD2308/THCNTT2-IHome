import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './views/home';
import DataSensorPage from './views/dbsensor';


function App() {
  return (
    <div className="App">
      <header>
        <div class="vertical-midle">
            <h3><span class="title">IHome</span></h3>
            <ul class="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/datasensor">Sensor</Link></li>
                <li><Link to="#">Policy</Link></li>
                <li><Link to="#">Help</Link></li>
            </ul>
        </div>
    </header>
      {/* <nav>
        <ul>
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/datasensor'>Data sensor</Link> </li>
          <li><Link to='/createnewroom'>Create new room</Link> </li>
          <li><Link to='/updateroom'>Update room</Link> </li>
        </ul>
      </nav> */}

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
