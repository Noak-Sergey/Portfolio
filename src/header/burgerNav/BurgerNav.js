import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";
import burgerMenuIcon from "../../assets/images/burgerMenu2.png";

export function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <div className={style.burgerNav}>
            <div className={ menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={-80}
                      duration={500}>Main</Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={-80}
                      duration={500}>Skills</Link>
                <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={-80}
                      duration={500}>Projects</Link>
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true} offset={-80}
                      duration={500}>Contacts</Link>
            </div>
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <img className={style.burgerIcon} src={burgerMenuIcon} alt='menu'/>
            </div>
        </div>
    )
}