import React from "react";
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";


export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work title={'Todolist'} description={'Good'} />
                    <Work title={'Social-Network'} description={'Super good'}/>
                </div>
            </div>
        </div>
    )
}