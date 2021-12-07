import React, {useState} from 'react'
import "./Contact.css"
import programmer from "./programmer.png"
import linkedin from "./linkedin-logo.png"
import github from "./github.png"

export default function Contact() {
    const [message, setMessage] = useState(false);
    
    const handleSubmit=(e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={programmer} alt="programmer"/>
            </div>
            <div className="right">
                <h2>Contact me</h2>
                <div className="links">
                    <a href="https://www.linkedin.com/in/saujanyasood/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
                    <a href="https://github.com/saujanyasood" target="_blank" rel="noreferrer"><img src={github} alt="github"/></a>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Type your message"/>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, your message has been received!</span>}
                </form>
            </div>
        </div>
    )
}
