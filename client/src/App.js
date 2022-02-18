import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import MainFeed from './components/MainFeed';
import NewPost from './components/NewPost';
import UserProfile from './components/UserProfile';
import Post from './components/Post';
import User from './components/User';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/posts" element={<MainFeed user={user} />}></Route>
          <Route path="/new" element={<NewPost user={user} />}></Route>
          <Route path="/me" element={<UserProfile user={user} />}></Route>
          <Route path="/users/:id" element={<User />}></Route>
          <Route path="/posts/:id" element={<Post user={user} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
