import React from "react";
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

import {Title} from "../common/components/title/Title";

import style from './Contacts.module.scss';
import styleContainer from './../common/styles/Container.module.css';


export function Contacts() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bttze3h', 'template_ia85hol', e.target, 'HFzDXtRnoFAqeXj98')
        .then(res => {
            console.log(res);
            alert('Message was send !!!');
        })
        .catch(err => {
            console.log(err);
            alert('Something went wrong !!!');
        });
    };

    return (
        <div id='contacts' className={styleContainer.container}>
            <div className={style.contactBlock}>

                <Fade left>
                    <div className={style.title}>
                        <Title text={'Contacts'}/>
                    </div>
                </Fade>

                <Fade right>
                    <div className={style.form_wrapper}>
                        <form onSubmit={sendEmail}>
                            <ul>
                                <li className={style.form_line}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" name="name" required/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone"/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" required/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message"></textarea>
                                </li>
                                <li className={style.form_line}>
                                    <button type="submit">Submit</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </Fade>

            </div>

        </div>
    )
}