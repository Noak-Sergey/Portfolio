import React from "react";
import style from './Main.module.scss';
import styleContainer from './../common/styles/Container.module.css';
import myPhoto from '../assets/images/photoMy.jpg'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

export function Main() {
    return (
        <div id='main' className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.hiText}>
                    <span>Hi There</span>
                    <h1>I am Sergey <span>Noak</span></h1>
                    <ReactTypingEffect
                        text={["Frontend Developer"]}
                        speed={300}
                        eraseDelay={2500}
                        typingDelay={1500}
                    />
                </div>

                <Fade right>
                    <Tilt className="Tilt" options={{max: 20}}>
                        <div>
                            <img src={myPhoto} className={style.photo} alt='My photo'/>
                        </div>
                    </Tilt>


                </Fade>
            </div>

        </div>
    )
}