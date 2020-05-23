import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="home-container">
            <nav>
                <span>El</span>
                    <Link style="color: #293550">Home</Link>
                    <Link><a>About</a></Link>
                    <Link><a>Login</a></Link>
                    <Link><a>Quero Começar</a></Link>
            </nav>
            <div className="apresentation">
                o que é Elegance
            </div>
            <div className="details">
                Como funciona
            </div>
        </div>
    );
}