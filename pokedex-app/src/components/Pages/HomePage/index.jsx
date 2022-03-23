import React from "react";
import { Link } from "react-router-dom";

import EstruturaPagina from '../../EstruturaPagina'
import pokedex from '../../../assets/pokedex.png';
import BotaoCatalogo from "../../BotaoCatalogo";
import './style.css';

export default function HomePage() {
    return (
        <div>
            <EstruturaPagina>
                <div id="shadow-bg"></div>
                <img src={pokedex} alt="PokedexImg" />
                <div className="input-home-page">
                    <input type="text" placeholder="Digite aqui o nome do seu Pokemón"/>
                    <p>, eu escolho você!</p>
                </div>
                <Link className="go-btn" to ="/Descricao">Go!</Link>
                <BotaoCatalogo />
            </EstruturaPagina>
        </div>
    );
}