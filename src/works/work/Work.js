import React from "react";
import style from './Work.module.scss';


export function Work(props) {

    const pageOn = () => {
        return (window.open(`${props.link}`))
    }

    return (
        <div className={style.work}>
            <div className={style.image} style={props.style}>
                <button className={style.viewBtn} onClick={pageOn}>look</button>
            </div>
            <div className={style.workInfo}>
                <h3 className={style.workTitle}>{props.title}</h3>
                <span className={style.description}>
                {props.description}
            </span>
            </div>

        </div>
    )
}