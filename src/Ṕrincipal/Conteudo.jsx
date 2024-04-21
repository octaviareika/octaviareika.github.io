import React from "react";
import { Routes, Route } from "react-router-dom";
import Body from "./Body";
import Sobre from "./Sobre";
export default function Conteudo(props){

    return (
        <main>
            <Routes>
                <Route path="/" element={<Body></Body>} />
                <Route path="/about" element={<Sobre></Sobre>} />
            </Routes>

        </main>
    )
}