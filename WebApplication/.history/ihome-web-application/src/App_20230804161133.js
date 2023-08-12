import logo from './logo.svg';
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
          <li><a href='/'>Home</a> </li>
          <li><a href='/datasensor'>Data sensor</a> </li>
          <li><a href='/createnewroom'>Create new room</a> </li>
          <li><a href='/updateroom'>Update room</a> </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
