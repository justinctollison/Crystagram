import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// each comment will have a unique user.id and post.id, it will display all the post.id ones in a specific post. each post has many comments, each comment belongs to a post.

function Comment() {
  const [comment, setComment] = useState()

  const { id } = useParams()

  useEffect(() => {
    fetch(`/comments/${id}`)
      .then((r) => r.json())
      .then(setComment);
  }, [])

  return (
    <div>
        Comment
    </div>
  )
}

export default Comment;