import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoImage from '../../Assets/images/logo_small.png'

import { 
    Container, 
    Logo, 
    Navbar 
} from './styles';

const Header = () => {
    return (
        <Container>
            <Logo src={LogoImage} />
            
            <Navbar>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="pagina-ativa">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/empresa" activeClassName="pagina-ativa">Empresa</NavLink>
                    </li>
                    <li>
                        <div className="dropdown">
                            <NavLink to="/testes-invasao" activeClassName="pagina-ativa">Testes de invasão</NavLink>
                            <div className="dropdown-links">
                                <Link to="/testes-invasao/pentest">O que é Pentest?</Link>
                                <Link to="/testes-invasao/fases-pentest">Fases de um Pentest</Link>
                                <Link to="/testes-invasao/tipos-pentest">Tipos de Pentest</Link>
                                <Link to="/testes-invasao/relatorios">Relatórios gerais e técnicos</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="pagina-ativa">Contato</NavLink>
                    </li>
                </ul>
            </Navbar>
        </Container>
    )
}

export default Header;