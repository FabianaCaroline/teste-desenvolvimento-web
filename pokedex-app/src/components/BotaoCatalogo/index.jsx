import React from "react";
import { Link } from "react-router-dom";
import './style.css';

export default function BotaoCatalogo() {
    return (
        <div className="catalogo-btn">
            <Link to='/catalogo'>Catálogo</Link>
            <div className="shadow"></div>
        </div>
    );
}