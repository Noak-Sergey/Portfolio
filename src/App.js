import React from "react";
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {DistantWork} from "./DistantWork/DistantWork";
import {Contacts} from "./contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <DistantWork/>
            <Contacts/>
        </div>
    );
}

export default App;
