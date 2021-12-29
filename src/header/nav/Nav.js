import React from "react";
import style from './Nav.module.scss';

export function Nav() {
    return (
        <div className={style.nav}>
            <a href=''>Main</a>
            <a href='#skills'>Skills</a>
            <a href='#projects'>Projects</a>
            <a href='#contacts'>Contacts</a>
        </div>
    )
}