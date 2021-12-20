import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import reactReduxImg from "../assets/images/react_redux.png";
import jsTsImg from "../assets/images/jsTs.jpg";
import htmlCssImg from "../assets/images/htmlCss.jpg";
import axiosRestImg from "../assets/images/axios.png";
import gitGithubImg from "../assets/images/gitGithub.png";


export function Skills() {

    const reactRedux = {
        backgroundImage: `url(${reactReduxImg})`,
    }

    const jsTs = {
        backgroundImage: `url(${jsTsImg})`,
    }

    const htmlCss = {
        backgroundImage: `url(${htmlCssImg})`,
    }

    const axiosRest = {
        backgroundImage: `url(${axiosRestImg})`,
    }

    const gitGithub = {
        backgroundImage: `url(${gitGithubImg})`,
    }

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={reactRedux} title={'React & Redux'} description={'It is cool'}/>
                    <Skill style={jsTs} title={'JS & TS'} description={'It is really cool'}/>
                    <Skill style={htmlCss} title={'HTML & CSS'} description={'bla bla bla'}/>
                    <Skill style={axiosRest} title={'Axios & REST API'} description={'yo YO Yo'}/>
                    <Skill style={gitGithub} title={'Git & Github'} description={'repository'}/>
                </div>
            </div>
        </div>
    )
}