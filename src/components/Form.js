import React, { useState } from 'react';


export default function Form(prop) {
    const [text, setText] = useState("");

    const handleOnClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    };
    const handleOnChange = (event) => { // Add 'event' as a parameter
        console.log("Changed");
        setText(event.target.value);
    };
    const copyText = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const handleClear = () => {
        setText("")
    }

    return (
        <div>
            <form>
                <h1 className={`text-${prop.mode==="light" ? "dark" : "light"} my-3`}>{prop.title}</h1>
                <div className="mb-3">
                    <textarea id="myBox" value={text} rows="8" className={`form-control bg-${prop.mode} text-${prop.mode==="light" ? "dark" : "light"}`} onChange={handleOnChange}>
                    </textarea>
                </div>
                <button type="button" className={`btn btn-${prop.mode==="light" ? "success" : "warning"}`} onClick={handleOnClick}>Convert Text</button>
                <button type="button" className={`btn btn-${prop.mode==="light" ? "success" : "warning"} mx-3`} onClick={copyText}>Copy Text</button>
                <button type="button" className={`btn btn-${prop.mode==="light" ? "success" : "warning"}`} onClick={handleClear}>Clear Text</button>
            </form>
            <div className={`my-3 text-${prop.mode==="light" ? "dark" : "light"}`}>
                <h2>Text summery!</h2>
                <p>{text.split(' ').length} No. of words</p>
                <p>{text.length} No. of character</p>
                <p>{0.008*text.split(' ').length} esteemate time to read</p>
                <h2>Preview</h2>
                <h3>{text.length==0 ? prop.preview : text}</h3>
            </div>
        </div>
    );
}