import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import todoImg from '../assets/images/todo.jpg';
import socialImg from '../assets/images/social_network.jpg';
import learnCardsImg from '../assets/images/learnCardImg.jpg';


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
    const linkSocialNetwork = 'https://github.com/Noak-Sergey'
    const linkTodos = 'https://noak-sergey.github.io/project-cards/'

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My works'}/>
                <div className={style.works}>
                    <Work style={todos} title={'Todolist'} description={'Project description'} link={linkTodos}/>
                    <Work style={social} title={'Social-Network'} description={'Project description'} link={linkSocialNetwork}/>
                    <Work style={learnCards} title={'Learning-Cards'} description={'Project description'} link={linkProjectCard}/>
                </div>
            </div>
        </div>
    )
}