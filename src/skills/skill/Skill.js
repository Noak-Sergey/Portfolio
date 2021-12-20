import React from "react";
import style from './Skill.module.scss';

export function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <div className={style.skillInfo}>
                <h3>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>
        </div>
    )
}