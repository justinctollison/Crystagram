import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Comment from './Comment';

function CommentFeed() {
  
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState("")

  const { id } = useParams()

  useEffect(() => {
    fetch(`/posts/${id}`)
        .then((r) => r.json())
        .then(setPost);
}, []);

  useEffect(() => {
    fetch(`/posts/${id}/comments`)
      .then((r) => r.json())
      .then(setComments);
  }, []);

  return (
    <div>
        <div>
          {comments.map((comment) => (
            <article key={comment.id} className='task'>
              {comment.text}
            </article>
          ))}
        </div>
    </div>
  )
}

export default CommentFeed;