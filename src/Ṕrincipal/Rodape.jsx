import React from "react";
import "./Rodape.css";
import segundaFoto from "./fotos/jingliu2.jpg";

export default function Rodape(props){

    // h1, imagem, p, vários botoes
    return (
    
        <footer className="rodapeInicio">
            <div className="divisao-projeto-total">
                <div className="divisao-projeto-um">
                    <h1 className="h1-projeto">Projetos realizados</h1>

                    <img src={segundaFoto} alt="foto de perfil" className="foto-perfil dois"></img>
                </div>

                <div className="divisao-projeto-dois">
                    <p className="paragrafo-projeto">No decorrer da minha trajetória da computação, realizei vários projetos que envolvam apenas 
                        a parte de Back-End ou de Front-End, sendo que alguns projetos envolvem as duas partes. Além
                        disso, tenho repositórios no GitHub que contém projetos que realizei durante a minha graduação.
                    </p>
                    <div className="botao-projeto-total">
                        <div className="botao-projeto-um um">
                            <button className="botao-projeto"> TP Org. de Computadores</button>
                            <button className="botao-projeto">Tabela de Nomes Interativa</button>
                            <button className="botao-projeto">Validando Formulário </button>
                        </div>
                        <div className="botao-projeto-dois">
                            <button  className="botao-projeto">Veículo JPA/API</button>
                            <button className="botao-projeto">Cadastro Escolar</button>
                            <button className="botao-projeto">Campo Minado</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    
    )

}