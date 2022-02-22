import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function User() {

    const [user, setUser] = useState("")

    const { id } = useParams();

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then(setUser);
    }, []);

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
        </div>
  );
}

export default User;