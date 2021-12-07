import React from 'react'
import "./Skills.css"

export default function Skill(props) {
    return (
        <div className="item">
            <img src={props.img} alt="skill"/>
            <h3>{props.name}</h3>
        </div>
    )
}
