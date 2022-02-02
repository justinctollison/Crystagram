import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={}></Route>
          <Route path="" element={}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
