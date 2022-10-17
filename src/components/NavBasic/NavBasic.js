import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBasic.scss'

export const NavBasic = () => {
    const [active, setActive] = useState('default');
    const handleActive = (selectedKey) => {
        setActive(selectedKey)
    }

    return (
            <Navbar variant="dark" expand="lg" sticky="top" className='navbar'>
                <Container>
                    <Navbar.Brand as={ Link } to={"/"}>
                        <img src='../assets/logo/icon.png' alt="Logo MateAR" className="navbar__img"/>
                        Checkpoint<span className="navbar__span">2</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="navbar__collapse">
                        <Nav className="me-auto navbar__items" activeKey={active} onSelect={handleActive}>
                            <Nav.Link as={ Link } to={"/Inicio"} eventKey="Inicio">
                                Inicio
                            </Nav.Link>
                            <Nav.Link as={ Link } to={"/Form"} eventKey="Form">
                                Formulario de Contacto
                            </Nav.Link>
                            <Nav.Link as={ Link } to={"/Users"} eventKey="Users">
                                Users
                            </Nav.Link>
                            <Nav.Link as={ Link } to={"/Cards"} eventKey="Cards">
                                API Rick & Morty
                            </Nav.Link>
                        </Nav>
                    <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
