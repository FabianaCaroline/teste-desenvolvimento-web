import React from "react";
import './style.css'


const EstruturaPagina = (props) => (
    <div>
        <header>
            <div className="header"></div>
        </header>
        <main>
            {props.children}
        </main>
        <footer>
            <div className="footer"></div>
        </footer>
    </div>
);

export default EstruturaPagina;