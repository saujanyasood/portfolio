import React, { useState, useEffect } from 'react'
import "./Skills.css"
import Skill from "./Skill"
import SkillBar from './SkillBar/skillBar'
import {languages, technicals, softs} from "../../skillData/skillData"

export default function Skills() {
    const [selected, setSelected] = useState("languages");
    const [data, setData] = useState([]);
    const list=[
        {
            id: "languages",
            title: "Languages"
        },
        {
            id: "technical",
            title: "Technical Skills"
        },
        {
            id: "softskills",
            title: "Soft Skills"
        }
    ];

    useEffect(()=>{

        switch (selected){
            case "languages":
                setData(languages);
                break;
            case "technical":
                setData(technicals);
                break;
            case "softskills":
                setData(softs);
                break;
            default:
                setData(languages);
        }

    }, [selected])

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <ul>
                {list.map((item) => (
                    <SkillBar
                      title={item.title}
                      active={selected === item.id}
                      setSelected={setSelected}
                      id={item.id}
                    />
                  ))}
            </ul>
            <div class="container">
                {data.map((dataItem) => (
                    <Skill name={dataItem.title} img={dataItem.img}/>
                ))}
            </div>
        </div>
    )
}
