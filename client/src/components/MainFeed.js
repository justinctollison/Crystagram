import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import NewsBar from './NewsBar';
import { useSelector, useDispatch } from "react-redux"
import { setPost } from "../postsSlice"


function MainFeed() {

  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then( posts => dispatch(setPost(posts)));
  }, []);

  console.log(posts)
  

  return(
    <div className='div-newhome'>
      <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className='div-feed'>{post.map((nest) => (
            <article key={nest.id} className='task'>
            <h2>{nest.user.username}</h2>
            <img src={nest.user.image_url} width='75px' height='75px'></img>
            <h1>{nest.title}</h1>
            <img src={nest.image_url} width="960" height="540" alt='This is a post'></img>
            <p>{nest.text}</p>
            <br></br>
            <Link className='btn' to={`/posts/${nest.id}`}>View</Link>
        </article>
          ))}</div>
        ))
      ) : (
        <>
        Not Found
        </>
      )}
      </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <NewsBar />
        </div>
    </div>
  );
}

export default MainFeed;
