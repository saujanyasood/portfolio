import React from 'react'
import "./Projects.css"

export default function Project(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <li className="item">
                <img src={props.img} alt="project"></img>
                <h3>{props.name}</h3>
            </li>
        </a>
    )
}