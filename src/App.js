import './App.css';

import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Main from './components/Main'

function App() {
  return (
    <Router>
    <h1>Project Tinder</h1>
    <h2>By Maciej Tylak</h2>
    <main>

      <div class="topnav">
          <NavLink to="/" exact>List</NavLink>
          <NavLink to="/new">New</NavLink>
      </div>
      <Main />

    </main>
  </Router>
  );
}

export default App;