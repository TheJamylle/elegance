import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.png';
import el from '../../assets/elegance.png';

export default function Logon(){
    return(
        <div className="body">

        
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Elegance"/>

                <form>
                    <input placeholder="Usuário"/>
                    <br/>
                    <br/>
                    <input placeholder="Senha"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            
        </div>
        </div>
    );
}