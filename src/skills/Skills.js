import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";


export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'HTML & CSS'} description={'bla bla bla'}/>
                    <Skill title={'JS & TS'} description={'yo YO Yo'}/>
                    <Skill title={'React'} description={'bla bla bla'}/>
                    <Skill title={'Redux'} description={'yo YO Yo'}/>
                </div>
            </div>
        </div>
    )
}