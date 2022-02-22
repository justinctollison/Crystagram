import React, { useEffect, useState } from 'react'
import Comment from './Comment';

function CommentFeed() {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/comments")
      .then((r) => r.json())
      .then(setComments);
  }, []);


  return (
    <div>
        <div>
          {comments.map((comment) => (
            <article>
              {comment.text}
            </article>
          ))}
        </div>
    </div>
  )
}

export default CommentFeed;