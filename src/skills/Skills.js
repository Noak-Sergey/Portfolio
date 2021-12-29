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
import Fade from 'react-reveal/Fade';


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
        <div id='skills' className={style.skillsBlock}>

            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Fade>
                    <Title text={'Skills'}/>
                </Fade>
                <div className={style.skills}>
                    <Fade>
                        <Skill style={react} title={'React'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={redux} title={'Redux'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={js} title={'JS'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={ts} title={'TS'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={html} title={'HTML'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={css} title={'CSS'} description={''}/>
                    </Fade>
                    <Fade>
                        <Skill style={github} title={'Git & Github'} description={''}/>
                    </Fade>
                </div>
            </div>

        </div>
    )
}