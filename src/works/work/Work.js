import React from "react";
import style from './Work.module.css';


export function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.imgContainer}>
                <h6>Picture</h6>
                <button className={style.viewBtn}>look</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
}