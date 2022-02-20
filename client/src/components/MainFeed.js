import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import CommentFeed from './CommentFeed';

function MainFeed() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  return( 
    <div className='div-newhome'>
      <div className='div-feed' style={{flexDirection:"column-reverse"}}>
      {posts.length > 0 ? (
        posts.map((post) => (
          <article key={post.id} className='task'>
              <h2>{post.user.username}</h2>
              <h1>{post.title}</h1>
              <img src={post.image_url} alt='display image'></img>
              <p>{post.text}</p>
              {/* <p>{post.quote}</p>
              <cite>{post.quotePerson}</cite> */}
              <br></br>
              <Link to={`/posts/${post.id}`}>View</Link>
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
      </div>
    </div>
  );
}

export default MainFeed;
