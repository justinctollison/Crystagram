import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function UserProfile({ user }) {

  return(
    <div style={{width:'80%',margin:'0 auto',display:'flex',flexDirection:'row',marginTop:'25px'}}>
            <div style={{width:'40%'}}>
                <div style={{width:'150px',position:'relative',left:'50%'}}>{user.imageUrl}</div>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <div style={{fontSize:'2.5rem'}}>{user.username}</div>
                <div style={{fontWeight:'bold'}}>{user.bio}</div>
                <div>{user.email}</div>
            </div>
            <br></br>
            <Link to="/me/edit" className='btn'>
                Edit User Profile
            </Link>
    </div>
  )
}

export default UserProfile;