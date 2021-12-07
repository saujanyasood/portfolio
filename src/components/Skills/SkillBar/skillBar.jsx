import React from 'react'
import "./skillBar.css"

export default function skillBar(props) {
    return (
        <li className={"skillBar " + (props.active && "active")} onClick={() => props.setSelected(props.id)}>
            {props.title}
        </li>
    )
}