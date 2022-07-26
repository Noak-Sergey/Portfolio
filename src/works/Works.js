import React from 'react';
import style from './Works.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import todoImg from '../assets/images/todo.jpg';
import socialImg from '../assets/images/social_network.jpg';
import goCoronaImg from '../assets/images/goCorona.png';
import marvelImg from '../assets/images/marvel-logo.png';
import foodImg from '../assets/images/food-logo.png';
import employeesImg from '../assets/images/employees-pr.png';
import orderImg from '../assets/images/order-logo.png';
import bakeryImg from '../assets/images/bakery-logo.png';
import guitarPlayerImg from '../assets/images/guitarPlayer-logo.png';
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

    const foodProject = {
        backgroundImage: `url(${foodImg})`,
    }

    const employeesProject = {
        backgroundImage: `url(${employeesImg})`,
    }

    const ordersProject = {
        backgroundImage: `url(${orderImg})`,
    }

    const bakery = {
        backgroundImage: `url(${bakeryImg})`,
    }

    const guitarPlayer = {
        backgroundImage: `url(${guitarPlayerImg})`,
    }

    const linkGoCorona = 'https://noak-sergey.github.io/html-css-gocorona/'
    const linkSocialNetwork = 'https://noak-sergey.github.io/Social-Network/'
    const linkTodos = 'https://noak-sergey.github.io/TodoComplete/'
    const linkMarvelClass = 'https://noak-sergey.github.io/marvel-heroes-class/'
    const linkFood = 'https://noak-sergey.github.io/food_project/'
    const linkEmployees = 'https://noak-sergey.github.io/employees-project/'
    const linkOrdersProject = 'https://noak-sergey.github.io/test_QATesters/'
    const linkBakery = 'https://noak-sergey.github.io/bakery/'
    const linkGuitarPlayer = 'https://noak-sergey.github.io/portfolio-guitarPlayer/'

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
                        <Work style={employeesProject} title={'Employees'} description={'HTML/CSS/JS/React'}
                              link={linkEmployees}/>
                    </Fade>

                    <Fade>
                        <Work style={todos} title={'Todolist'} description={'TS/JS/React/Redux/Axios'} link={linkTodos}/>
                    </Fade>

                    <Fade>
                        <Work style={social} title={'Social-Network'} description={'TS/JS/React/Redux/Axios and still in development UI'}
                              link={linkSocialNetwork}/>
                    </Fade>

                    <Fade>
                        <Work style={ordersProject} title={'Orders-project'} description={'TS/JS/React/Redux/Bootstrap and still logic development'}
                              link={linkOrdersProject}/>
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