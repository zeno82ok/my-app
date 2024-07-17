import React, { useState } from 'react'

export default function About(prop) {
    const [theme, setTheme] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [text, setText] = useState("Enable Dark mode")

    const handleClick = () => {
         if (theme.color === 'black') {
            setText("Disable dark mode")
            setTheme({
                color: 'white',
                backgroundColor: 'black'
            })
        } else {
            setText("Enable dark mode")
            setTheme({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }
    return (
        <div>
            <div className={`card my-3`} style={theme}>
                <h1>About us</h1>
                <img className="card-img-top" src="/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" onClick={handleClick}>About us</a>
                </div>
            </div>
        </div>
    )
}
