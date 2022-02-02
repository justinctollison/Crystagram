import React from 'react';
import { useState } from 'react';

const ScreenshotPost = () => {
    const [file, setFile] = useState(null)

    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0]
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
        } else {
            setFile(null);
        }
    }

    return (
        <form>
            <input type="file" onchange={changeHandler}/>
        </form>
    )

}

export default ScreenshotPost;