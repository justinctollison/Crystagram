import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

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
        <p>{post.text}</p>
        <img src={post.image_url} width="1000" height="750" alt='display image'></img>
        <div>
          <button onClick={handleDelete}>Delete this</button>
        </div>
    </div>
  );
}

export default Post;