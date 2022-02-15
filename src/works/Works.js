import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import todoImg from '../assets/images/todo.jpg';
import socialImg from '../assets/images/social_network.jpg';
import learnCardsImg from '../assets/images/learnCardImg.jpg';
import Fade from 'react-reveal/Fade';

export function Works() {
    const social = {
        backgroundImage: `url(${socialImg})`,
    }

    const todos = {
        backgroundImage: `url(${todoImg})`,
    }

    const learnCards = {
        backgroundImage: `url(${learnCardsImg})`,
    }

    const linkProjectCard = 'https://noak-sergey.github.io/project-cards/'
    const linkSocialNetwork = 'https://noak-sergey.github.io/Social-Network/'
    const linkTodos = 'https://noak-sergey.github.io/TodoComplete/'

    return (
        <div id='projects' className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Fade>
                    <Title text={'My works'}/>
                </Fade>
                <div className={style.works}>
                    <Fade>
                        <Work style={todos} title={'Todolist'} description={'lorem ipsum text'} link={linkTodos}/>
                    </Fade>
                    <Fade>
                        <Work style={social} title={'Social-Network'} description={'lorem ipsum text'}
                              link={linkSocialNetwork}/>
                    </Fade>
                    <Fade>
                        <Work style={learnCards} title={'Learning-Cards'} description={'lorem ipsum text'}
                              link={linkProjectCard}/>
                    </Fade>
                </div>
            </div>
        </div>
    )
}