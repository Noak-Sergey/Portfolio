import React from "react";
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";


export function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={'My works'}/>
                <div className={style.works}>
                    <Work title={'Todolist'} description={'Project description'} />
                    <Work title={'Social-Network'} description={'Project description'}/>
                </div>
            </div>
        </div>
    )
}