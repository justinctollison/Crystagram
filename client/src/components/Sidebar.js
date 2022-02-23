import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Sidebar() {
    
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState([])

    useEffect(() => {
      fetch("/users")
        .then((r) => r.json())
        .then(setUsers);
    }, []);

  //   function handleClick(e) {
  //     e.preventDefault();
  //     fetch(`/users/${id}/follow`, {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //         }),
  //     }).then((r) => {
  //         if(r.ok) {
  //             navigate("/posts");
  //         } else {
  //             r.json().then((err) => setErrors(err.errors));
  //         }
  //     });
  // }

  return (
    <div className='sidebar'>
        <h2> Suggestions </h2>
        ________________________
        {users.map((user) => 
        <article key={user.id} style={{fontSize:'1.3rem',width:'min-content', display:'flex'}} >
            <h3>{user.username}</h3>
            <Link to={`/users/${user.id}`}><button className='btn'>Profile</button></Link>
        </article>)}
    </div>
  )
}

export default Sidebar;