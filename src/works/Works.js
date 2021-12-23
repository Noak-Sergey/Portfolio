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

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My works'}/>
                <div className={style.works}>
                    <Work style={todos} title={'Todolist'} description={'Project description'} />
                    <Work style={social} title={'Social-Network'} description={'Project description'}/>
                    <Work style={learnCards} title={'Learning-Cards'} description={'Project description'}/>
                </div>
            </div>
        </div>
    )
}