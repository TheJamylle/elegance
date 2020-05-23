import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/elegance.png';
import el from '../../assets/elegance.png';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Elegance"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e tenha um controle maior da sua coleção de roupas.</p>

                    <Link to="">
                        <FiArrowLeft size={16} color="#293550"/>
                    </Link>
                </section>
                <form>
                    <input placeholder="Seu Nome" value={name}
                    onChange={e => setName(e.target.value)}/>
                    <input placeholder="Sua Senha" value={password}
                    onChange={e => setPassword(e.target.value)}/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}