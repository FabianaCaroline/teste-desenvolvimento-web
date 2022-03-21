import React from "react";
import EstruturaPagina from "../EstruturaPagina";
import pokedex from '../../assets/pokedex.png';
import './style.css'

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
                <button>Go!</button>
            </EstruturaPagina>
        </div>
    );
}