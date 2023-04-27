import React from 'react';
import Fade from 'react-reveal/Fade';

import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';

import bakeryImg from '../assets/images/bakery-logo.png';
import guitarPlayerImg from '../assets/images/guitarPlayer-logo.png';
import goCoronaImg from '../assets/images/goCorona.png';
import foodImg from '../assets/images/food-logo.png';
import labsalesImg from '../assets/images/labsalesImg.png';
import doct24Img from '../assets/images/doct24-test.png';
import employeesImg from '../assets/images/employees-pr.png';
import marvelClassImg from '../assets/images/marvel-logo.png';
import marvelFuncImg from '../assets/images/marvelFunc-logo.png';
import todoImg from '../assets/images/todo.jpg';
import socialImg from '../assets/images/social_network.jpg';

import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'


export function Works() {
    const bakery = {
        backgroundImage: `url(${bakeryImg})`,
    }

    const guitarPlayer = {
        backgroundImage: `url(${guitarPlayerImg})`,
    }

    const goCorona = {
        backgroundImage: `url(${goCoronaImg})`,
    }

    const foodProject = {
        backgroundImage: `url(${foodImg})`,
    }

    const labsalesProject = {
        backgroundImage: `url(${labsalesImg})`,
    }

    const doct24Project = {
        backgroundImage: `url(${doct24Img})`,
    }

    const employeesProject = {
        backgroundImage: `url(${employeesImg})`,
    }

    const marvelClass = {
        backgroundImage: `url(${marvelClassImg})`,
    }

    const marvelFunc = {
        backgroundImage: `url(${marvelFuncImg})`,
    }

    const todos = {
        backgroundImage: `url(${todoImg})`,
    }

    const social = {
        backgroundImage: `url(${socialImg})`,
    }

    const linkBakery = 'https://noak-sergey.github.io/bakery/'
    const linkGuitarPlayer = 'https://noak-sergey.github.io/portfolio-guitarPlayer/'
    const linkGoCorona = 'https://noak-sergey.github.io/html-css-gocorona/'
    const linkFood = 'https://noak-sergey.github.io/food_project/'
    const linkLabsales = 'https://noak-sergey.github.io/labsales-test/'
    const linkDoct24 = 'https://noak-sergey.github.io/doct24-test/'
    const linkEmployees = 'https://noak-sergey.github.io/employees-project/'
    const linkMarvelClass = 'https://noak-sergey.github.io/marvel-heroes-class/'
    const linkMarvelFunc = 'https://noak-sergey.github.io/marvel_stars_func/'
    const linkTodos = 'https://noak-sergey.github.io/TodoComplete/'
    const linkSocialNetwork = 'https://noak-sergey.github.io/Social-Network/'
    
    
    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Fade>
                    <Title text={'My works'}/>
                </Fade>
                <div className={style.works}>

                    <Fade>
                        <Work style={bakery} title={'Bakery'} description={'HTML/CSS'}
                              link={linkBakery}/>
                    </Fade>

                    <Fade>
                        <Work style={guitarPlayer} title={'Portfolio guitar player'} description={'HTML/CSS/Adaptive'}
                              link={linkGuitarPlayer}/>
                    </Fade>

                    <Fade>
                        <Work style={goCorona} title={'GoCorona'} description={'HTML/CSS/Adaptive'}
                              link={linkGoCorona}/>
                    </Fade>

                    <Fade>
                        <Work style={foodProject} title={'Food-project'} description={'HTML/CSS/JS'}
                              link={linkFood}/>
                    </Fade>

                    <Fade>
                        <Work style={labsalesProject} title={'labsales-test'} description={'HTML/CSS/JS'}
                              link={linkLabsales}/>
                    </Fade>

                    <Fade>
                        <Work style={doct24Project} title={'doct24-test'} description={'HTML/Bootstrap/JS/React/Redux'}
                              link={linkDoct24}/>
                    </Fade>

                    <Fade>
                        <Work style={employeesProject} title={'Employees'} description={'HTML/CSS/JS/React'}
                              link={linkEmployees}/>
                    </Fade>

                    <Fade>
                        <Work style={marvelClass} title={'Marvel-class'} description={'JS/React/Fetch'}
                              link={linkMarvelClass}/>
                    </Fade>

                    <Fade>
                        <Work style={marvelFunc} title={'Marvel-func'} description={'JS/React/Fetch/React-Router-Dom'}
                              link={linkMarvelFunc}/>
                    </Fade>

                    <Fade>
                        <Work style={todos} title={'Todolist'} description={'TS/JS/React/Redux/Axios'} link={linkTodos}/>
                    </Fade>

                    <Fade>
                        <Work style={social} title={'Social-Network'} description={'TS/JS/React/Redux/Axios and still in development UI'}
                              link={linkSocialNetwork}/>
                    </Fade>
                    
                </div>
            </div>
        </div>
    )
}