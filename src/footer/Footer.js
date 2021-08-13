import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {BlockFooter} from "./blockFooter/BlockFooter";


export function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Footer</h2>
                <div className={style.footer}>
                    <BlockFooter/>
                    <BlockFooter/>
                    <BlockFooter/>
                    <BlockFooter/>
                </div>
            </div>
        </div>
    )
}