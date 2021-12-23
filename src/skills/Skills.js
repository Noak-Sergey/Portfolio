import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactImg from "../assets/images/reactImg2.png";
import reduxImg from "../assets/images/reduxImg.svg";
import jsImg from "../assets/images/jsImg.png";
import tsImg from "../assets/images/tsImg.png";
import htmlImg from "../assets/images/htmlImg.png";
import cssImg from "../assets/images/cssImg.png";
import githubImg from "../assets/images/githubImg.png";


export function Skills() {

    const react = {
        backgroundImage: `url(${reactImg})`,
    }

    const redux = {
        backgroundImage: `url(${reduxImg})`,
    }

    const js = {
        backgroundImage: `url(${jsImg})`,
    }

    const ts = {
        backgroundImage: `url(${tsImg})`,
    }

    const html = {
        backgroundImage: `url(${htmlImg})`,
    }

    const css = {
        backgroundImage: `url(${cssImg})`,
    }

    const github = {
        backgroundImage: `url(${githubImg})`,
    }

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={react} title={'React'} description={''}/>
                    <Skill style={redux} title={'Redux'} description={''}/>
                    <Skill style={js} title={'JS'} description={''}/>
                    <Skill style={ts} title={'TS'} description={''}/>
                    <Skill style={html} title={'HTML'} description={''}/>
                    <Skill style={css} title={'CSS'} description={''}/>
                    <Skill style={github} title={'Git & Github'} description={''}/>
                </div>
            </div>
        </div>
    )
}