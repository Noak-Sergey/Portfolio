import React from "react";
import style from './Contacts.module.css';
import styleContainer from './../common/styles/Container.module.css';


export function Contacts() {
    return (
        <div className={style.ContactBlock}>
            <div className={styleContainer.container}>
                <div>
                    <span className={style.text}>Contacts</span>
                    <div className={style.form_wrapper}>
                        <form>
                            <ul>
                                <li className={style.form_line}>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name"/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" id="phone"/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email"/>
                                </li>
                                <li className={style.form_line}>
                                    <label htmlFor="message">Message</label>
                                    <textarea></textarea>
                                </li>
                                <li className={style.form_line}>
                                    <button type="submit">Submit</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>

        </div>
)
}