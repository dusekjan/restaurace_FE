import React from 'react';
import {useNavigate} from "react-router-dom";

function Footer() {
    const navigate = useNavigate()

    return (
        <footer>
            <div className="left">
                <h3>Kontakt</h3>
                <ul>
                    <li>Aliquam id dolor</li>
                    <li>Maecenas ipsum velit</li>
                    <li>adipisicing@lore.ipsum</li>
                </ul>
            </div>
            <div className="middle">
                <button className="button-big" onClick={() => navigate("/menu")}>Vytvořit objednávku</button>
            </div>
            <div className="right">
                <h3>Otevírací doba</h3>
                <ul>
                    <li>Praesent id justo</li>
                    <li>10:00 - 22:00</li>
                    <li>Cras elementum</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;