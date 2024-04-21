import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
export default function Header(props){
    return (
        <header>
            <nav>
                <ul>
                    <li> 
                        <Link  className="link-nav" to="/">Inicio</Link> {/*Ja gera uma tag a (navegacao) */} {/*Link para a pagina inicial, tem que olhar o "to*/}
                    </li>
                    <li> 
                        <Link  className="link-nav" to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}