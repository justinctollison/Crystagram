import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function NewComment( {post} ) {
    const [text, setText] = useState("")
    const [post_id, setPost_id] = useState(`${post.id}`)

    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/posts/${post.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text,
                post_id,
            }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                navigate(`/posts/`);
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }


  return (
    <div>
        <h3>Create Comment</h3>
        <form onSubmit={handleSubmit} id={post.id}>
                <label htmlFor='text'>Text</label>
                <input
                    type="text"
                    id="text"
                    rows="5"
                    placeholder="Comment here..."
                    onChange={(e) => setText(e.target.value)}
                 />
                <button type="submit" className='btn'>
                    Submit
                </button>
                {/* <div>{errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}</div> */}
        </form>
    </div>
  )
}

export default NewComment;