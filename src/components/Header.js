import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
    NavbarText,
    NavDropdown,
    Row,
    Col
} from 'reactstrap';
import logo from "../assets/images/the-ring.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <Navbar sticky='top' expand="lg" className="header">
            <Container fluid >
                <Row className='title'>
                    <Col md="3">
                        <NavbarBrand href="/">
                            <img 
                            src={logo}
                            width="100"
                            height="86"
                            className="d-inline-block align-top"
                            alt="the one ring logo"
                            />
                        </NavbarBrand>
                    </Col>

                    <Col md="6" className='title'>
                        <NavbarBrand>
                            <NavbarText className='header-title'>
                                The lord of the rings
                            </NavbarText>
                        </NavbarBrand>
                    </Col>

                    <Col md="3" className='title'>
                        <Nav>
                            <NavLink className="nav-link custom-nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link custom-nav-link" to="/timeline">Timeline</NavLink>
                            <NavLink className="nav-link custom-nav-link" to="/characters">Characters</NavLink>
                            <NavLink className="nav-link custom-nav-link" to="/locations">Locations</NavLink>
                            <NavLink className="nav-link custom-nav-link" to="/contact">Contact</NavLink>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;

