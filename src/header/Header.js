import React from "react";
import style from './Header.module.scss';
import {Nav} from "./nav/Nav";
import Fade from 'react-reveal/Fade';
import {BurgerNav} from "./burgerNav/BurgerNav";

export function Header() {
    return (
        <div className={style.header}>
            <Fade top>
                <Nav/>
                <BurgerNav/>
            </Fade>
        </div>
    )
}