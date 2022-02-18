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

  return(
    <div>
        <p>{post.title}</p>
        <p>{post.text}</p>
    </div>
  );
}

export default Post;