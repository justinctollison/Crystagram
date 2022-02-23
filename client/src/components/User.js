import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function User() {

    const [user, setUser] = useState("")
    const [follower, setFollower] = useState()

    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then(setUser);
    }, []);

    function handleClick(e) {
        e.preventDefault();
        fetch(`/users/${id}/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user,
            }),
        }).then((r) => {
            if(r.ok) {
                navigate("/posts");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

  return(
    <div style={{width:'80%',margin:'0 auto',display:'flex',flexDirection:'row',marginTop:'25px'}}>
            <div style={{width:'40%'}}>
                <img src={user.image_url} alt='profile picture' style={{width:'150px',position:'relative',left:'50%'}}></img>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:'2.5rem'}}>{user.username}</div>
                <div style={{fontWeight:'bold'}}>{user.bio}</div>
                <div>{user.email}</div>
            </div>
            <button className='btn' key={user.id} onClick={handleClick}>Follow</button>
        </div>
  );
}

export default User;