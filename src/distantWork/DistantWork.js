import React from "react";
import style from './DistantWork.module.css';
import styleContainer from './../common/styles/Container.module.css';


export function DistantWork() {
    return (
        <div className={style.DWBlock}>
            <div className={styleContainer.container}>
                <div className={style.hiText}>
                    <span>Considering options for remote work</span>
                    <div>
                        <button className={style.button}>Send offer</button>
                    </div>
                </div>
            </div>

        </div>
    )
}