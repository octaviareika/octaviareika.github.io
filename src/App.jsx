import React from "react";
import Header from "./Ṕrincipal/Header";
import { BrowserRouter } from "react-router-dom"; // importando a bibloteca de Router
import Conteudo from "./Ṕrincipal/Conteudo";
import "./App.css";
import Rodape from "./Ṕrincipal/Rodape";

export default function App(){

    return (
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Header/> {/*Aqui vai ser renderizado o header da pagina*/}
                <Conteudo/> {/*Aqui vai ser renderizado o conteudo da pagina*/}
            </BrowserRouter>
        </div>
    )
}