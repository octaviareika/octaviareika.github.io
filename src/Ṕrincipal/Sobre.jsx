import React from "react";
import "./Sobre.css";
import bancoDeDados from "./fotos/base-de-dados.png";
import reactFoto from "./fotos/biblioteca.png";
import nodeFoto from "./fotos/node-js.png";
import javaFoto from "./fotos/java.png";
import cFoto from "./fotos/letra-c.png";
import jsFoto from "./fotos/script-java.png";
import { useState } from "react";

export default function Sobre(props){

    const [linkedin, setLinkedin] = useState("");
    const [gitHub, setGitHub] = useState("");

    return (
        <div className="sobre">
            <h1 className="titulo-sobre">Linguagens/FrameWorks</h1>
            <section className="secao-sobre">
                <ul className="lista-lang lang">
                    
                    <li className="lista-1">
                        <img src={cFoto} className="foto-c"></img>C/C++
                    </li>

                    <li className="lista-1">
                        <img src={jsFoto} className="foto-js"></img>Javascript
                    </li>

                    <li className="lista-1">
                        <img src={javaFoto}className="foto-java"></img>Java
                    </li>
                </ul>

                <ul className="lista-lang2 lang">
                    <li className="lista-2">
                        <img src={reactFoto} className="foto-react"></img>React
                    </li>

                    <li className="lista-2">
                        <img src={nodeFoto} className="foto-node"></img>Node.js
                    </li>


                    <li className="lista-2">
                        <img src={bancoDeDados} className="foto-jdbc"></img>JPA
                    </li>
                </ul>

                <h3 className="titulo-rede">Redes sociais</h3>
                <ul className="lista-rede-social">
                    <div className="divisao-rede-social">
                        <li className="titulo-da-lista">Linkedin</li>
                        <button className="botao-rede-social" onClick={ () => {
                            setLinkedin("Cecília Peret");
                            if (linkedin === "Cecília Peret"){
                                setLinkedin("");
                            }
                        }}>Clique !</button>
                        <a href="https://www.linkedin.com/in/cec%C3%ADlia-peret-05b332233/">{linkedin}</a>
                    </div>

                    <div className="divisao-rede-social">
                        <li className="titulo-da-lista">GitHub</li>
                        <button  className="botao-rede-social" onClick={() => {
                            setGitHub("octaviareika");
                            if (gitHub === "octaviareika"){
                                setGitHub("");
                            }
                        }}>Clique !</button>
                        <a href="https://github.com/octaviareika">{gitHub}</a>
                    </div>
                </ul>
            </section>



        </div>
    )
}