import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import linkedinImg from "../assets/images/linkedin_logo.png";
import telegramImg from "../assets/images/telegram_logo.png";
import githubImg from "../assets/images/github-logo.png";
import codewarsImg from "../assets/images/codewars_logo.png";



export function Footer() {

    const linkedin = {
        backgroundImage: `url(${linkedinImg})`,
    }

    const telegram = {
        backgroundImage: `url(${telegramImg})`,
    }

    const github = {
        backgroundImage: `url(${githubImg})`,
    }

    const codewars = {
        backgroundImage: `url(${codewarsImg})`,
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Footer</h2>
                <div className={style.footers}>
                    <div style={linkedin} className={style.footerIcon}>
                        <a href=''> </a>
                    </div>
                    <div style={telegram} className={style.footerIcon}>
                        <a href=''> </a>
                    </div>
                    <div style={github} className={style.footerIcon}>
                        <a href=''> </a>
                    </div>
                    <div style={codewars} className={style.footerIcon}>
                        <a href=''> </a>
                    </div>
                </div>
                <div className={style.copyright}>
                    © 2021 Sergey Noak. All rights reserved.
                </div>

            </div>
        </div>
    )
}