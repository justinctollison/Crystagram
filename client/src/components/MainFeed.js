import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import NewsBar from './NewsBar';


function MainFeed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return( 
    <div className='div-newhome'>
      <div className='div-feed' >
      {posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.id} className='task'>
              <h2>{post.user.username}</h2>
              <img src={post.user.image_url} width='75px'></img>
              <h1>{post.title}</h1>
              <img src={post.image_url} width="960" height="540" alt='This is a post'></img>
              <p>{post.text}</p>
              {/* <p>{post.quote}</p>
              <cite>{post.quotePerson}</cite> */}
              <br></br>
              <Link className='btn' to={`/posts/${post.id}`}>View</Link>
          </article>
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
