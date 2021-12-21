import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import {Title} from "../common/components/title/Title";



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
                <div className={style.copyright}>
                    2021 Все права защищены
                </div>

            </div>
        </div>
    )
}