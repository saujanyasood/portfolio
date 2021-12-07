import React, { useEffect, useRef } from 'react'
import "./Intro.css"
import saujanya from "./saujanya-modified.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {init} from "ityped"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: false, 
            strings: ['Computer Science Student', 'Web Developer', 'Coder', 'Problem Solver' ],
            backDelay: 1500,
            typeSpeed: 50,
        })
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src={saujanya} alt="profile"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <div className="stationary">
                        <h2>Hi there! I'm</h2>
                        <h1>Saujanya Sood</h1>
                    </div>
                    <h3>A <span ref={textRef}></span></h3>
                </div>
                <a href="#skills">
                    <ArrowDropDownIcon fontSize="inherit"/>
                </a>
            </div>
        </div>
    )
}
