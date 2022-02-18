import React, { useState } from 'react'

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
        </div>
  )
}

export default UserProfile;