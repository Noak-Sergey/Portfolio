import React from "react";
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/images/photoMy.jpg'

export function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.hiText}>
                    <span>Hi There</span>
                    <h1>I am Noak Sergey</h1>
                    <p>Frontend Developer</p>
                </div>
                <div>
                    <img src={myPhoto} className={style.photo} alt='My photo'/>
                </div>
            </div>

        </div>
    )
}