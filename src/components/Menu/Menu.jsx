import React from 'react'
import "./Menu.css"

export default function Menu(props) {
    return (
        <div className={"menu " + (props.onOpen && "active")}>
            <ul>
                <li onClick={() => props.setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => props.setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => props.setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={() => props.setMenuOpen(false)}>
                    <a href="#contact">Contact me</a>
                </li>
            </ul>
        </div>
    )
}
