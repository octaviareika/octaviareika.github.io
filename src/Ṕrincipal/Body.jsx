import React from "react";
import "./Body.css"
import fotoPerfil from "./fotos/jingliu1.jpg"; // Importa a imagem e atribui a importação a uma variável
import Rodape from "./Rodape"; // Importa o componente Rodape

export default function Body(props){
    return (
        <div className="body">
            <h1 className="titulo-principal">Bem vindo(a) ao meu portfólio!</h1>

            <main className="principal">
                <section className="secao">
                    <h3 className="sobre-mim">Sobre mim!!</h3>
                    <p className="paragrafo">Eu me chamo <strong>Cecília</strong> e desejo aprofundar meus conhecimentos em programação,
                    desejando seguir carreira de Front-End ou Back-End. Com isso, estudo muito para alcançar meus
                    objetivos.</p>
                    
                </section>
                <img src={fotoPerfil} alt="foto de perfil" className="foto-perfil"></img>
            </main>

            <div className="div-total">
                <div className="div-nome">
                    <div className="linha-nome"></div>
                    
                </div>
                <h5 className="subtitulo">   Portfólio</h5>
            </div>
            <Rodape/> {/*Aqui vai ser renderizado o rodape da pagina*/}

            
            <div className="div-total">
                <div className="div-nome">
                    <div className="linha-nome"></div>
                    
                </div>
                <h5 className="subtitulo">   Portfólio</h5>
            </div>
        </div>
            
        
        
    )
    
}