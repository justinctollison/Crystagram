import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Sidebar() {
    
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers);
    }, []);

  return (
    <div className='sidebar'>
        <h2> Suggestions </h2>
        {users.map((user) => 
        <article key={user.id} style={{fontSize:'1.3rem',width:'min-content'}} >
            <h3>{user.username}</h3>
            <Link to={`/users/${user.id}`}>Profile</Link>
            <button className='btn'>Follow</button>
        </article>)}
    </div>
  )
}

export default Sidebar;