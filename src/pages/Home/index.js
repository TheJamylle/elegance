import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import um from '../../assets/clothes.jpg';

export default function Home(){
    return(
        <div className="home-container">
            <nav>
                <a className="logo">El</a>
                    <Link><span>Home</span></Link>
                    <Link><span>About</span></Link>
                    <Link><span>Login</span></Link>
                    <Link><span>Quero Começar</span></Link>
            </nav>
            <div className="apresentation">
                <img src={um}/>
            </div>
            <div className="details">
                Como funciona
            </div>
            <div className="contact">
                Entre em contato
            </div>
        </div>
    );
}