import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import linkedinImg from "../assets/images/linkedin_logo.png";
import telegramImg from "../assets/images/telegram_logo.png";
import githubImg from "../assets/images/github-logo.png";
import codewarsImg from "../assets/images/codewars_logo.png";


export function Footer() {

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>

                <div className={style.footers}>

                        <a href='https://www.linkedin.com/in/sergey-noak-065503220/'>
                            <img className={style.footerIcon} src={linkedinImg} alt='linkedin'/>
                        </a>

                        <a href='https://t.me/NoakSergey'>
                            <img className={style.footerIcon} src={telegramImg} alt='telegram'/>
                        </a>

                        <a href='https://github.com/Noak-Sergey'>
                            <img className={style.footerIcon} src={githubImg} alt='github'/>
                        </a>

                        <a href='https://www.codewars.com/users/Sergey%20Noak'>
                            <img className={style.footerIcon} src={codewarsImg} alt='codewars'/>
                        </a>

                </div>
                <div className={style.copyright}>
                    © 2021 Sergey Noak. All rights reserved.
                </div>

            </div>
        </div>
    )
}