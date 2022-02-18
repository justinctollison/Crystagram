import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewPost() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [quote, setQuote] = useState("")
    const [quotePerson, setQuotePerson] = useState("")

    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                text,
                image_url: imageUrl,
                quote,
                quote_person: quotePerson,
            }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                navigate("/posts");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    

  return(
    <div>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="My Title"
                    onChange={(e) => setTitle(e.target.value)}
                 />
                <label htmlFor='text'>Text</label>
                <input
                    type="text"
                    id="text"
                    rows="5"
                    placeholder="My Text"
                    onChange={(e) => setText(e.target.value)}
                 />
                <label htmlFor='imageUrl'>Screenshot</label>
                <input
                    type="text"
                    id="imageUrl"
                    placeholder="My Screenshot"
                    onChange={(e) => setImageUrl(e.target.value)}
                 />
                {/* <label htmlFor='quote'>Quote</label>
                <input
                    type="text"
                    id="quote"
                    placeholder="My Quote"
                    onChange={(e) => setQuote(e.target.value)}
                 />
                <label htmlFor='quotePerson'>Quote Person</label>
                <input
                    type="text"
                    id="quotePerson"
                    placeholder="My Quoted Person"
                    onChange={(e) => setQuotePerson(e.target.value)}
                 /> */}
                <button type="submit" className='btn'>
                    Submit
                </button>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
        </form>
    </div>
  )
};

export default NewPost;