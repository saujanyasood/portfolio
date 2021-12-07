import React from 'react'
import "./Projects.css"
import Project from "./Project"
import {projects} from "../../projectsData/projectsData"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div class="container">
                {projects.map((dataItem) => (
                    <Project name={dataItem.title} img={dataItem.img} link={dataItem.link}/>
                ))}
            </div>
        </div>
    )
}