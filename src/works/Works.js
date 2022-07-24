import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import todoImg from '../assets/images/todo.jpg';
import socialImg from '../assets/images/social_network.jpg';
import goCoronaImg from '../assets/images/goCorona.png';
import marvelImg from '../assets/images/marvel-logo.png';
import Fade from 'react-reveal/Fade';

export function Works() {
    const social = {
        backgroundImage: `url(${socialImg})`,
    }

    const todos = {
        backgroundImage: `url(${todoImg})`,
    }

    const goCorona = {
        backgroundImage: `url(${goCoronaImg})`,
    }

    const marvelClass = {
        backgroundImage: `url(${marvelImg})`,
    }

    const linkGoCorona = 'https://noak-sergey.github.io/html-css-gocorona/'
    const linkSocialNetwork = 'https://noak-sergey.github.io/Social-Network/'
    const linkTodos = 'https://noak-sergey.github.io/TodoComplete/'
    const linkMarvelClass = 'https://noak-sergey.github.io/marvel-heroes-class/'

    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Fade>
                    <Title text={'My works'}/>
                </Fade>
                <div className={style.works}>
                    <Fade>
                        <Work style={goCorona} title={'GoCorona'} description={'HTML/CSS/Adaptive'}
                              link={linkGoCorona}/>
                    </Fade>
                    <Fade>
                        <Work style={todos} title={'Todolist'} description={'TS/JS/React/Redux/Axios'} link={linkTodos}/>
                    </Fade>
                    <Fade>
                        <Work style={social} title={'Social-Network'} description={'TS/JS/React/Redux/Axios and still in development UI'}
                              link={linkSocialNetwork}/>
                    </Fade>
                    <Fade>
                        <Work style={marvelClass} title={'Marvel_class'} description={'JS/React/Redux/Fetch'}
                              link={linkMarvelClass}/>
                    </Fade>
                    
                </div>
            </div>
        </div>
    )
}