import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'



export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Footer</h2>
                <div className={style.footers}>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>
                </div>
            </div>
        </div>
    )
}