import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CommentFeed from './CommentFeed';
import NewComment from './NewComment';

function Post() {

    const [post, setPost] = useState("")

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/posts/${id}`)
            .then((r) => r.json())
            .then(setPost);
    }, []);

    function handleDelete(e) {
      e.preventDefault();
      fetch(`/posts/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      }).then((r) => {
        if(r.ok) {
            navigate("/posts");
        } else {
            r.json()
        }
    });
  }

  return(
    <div>
        <p>{post.title}</p>
        <img src={post.image_url} width="1000" height="750" alt='This is a post'></img>
        <p>{post.text}</p>
        <div>
          <button onClick={handleDelete}>Delete this</button>
        </div>
        <div>
          <CommentFeed />
        </div>
        <div>
          <NewComment />
        </div>
    </div>
  );
}

export default Post;