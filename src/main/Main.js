import React from "react";
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/images/photoMy.jpg'
import Fade from 'react-reveal/Fade';

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <Fade left>
                    <div className={style.hiText}>
                        <span>Hi There</span>
                        <h1>I am Sergey <span>Noak</span></h1>
                        <p>Frontend Developer</p>
                    </div>
                </Fade>
                <Fade right>
                    <div>
                        <img src={myPhoto} className={style.photo} alt='My photo'/>
                    </div>
                </Fade>
            </div>

        </div>
    )
}