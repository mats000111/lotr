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
        <Navbar sticky='top'>
            <Container fluid>
                <Row>
                    <Col className='ms-1'>
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

                    <Col className='ms-10'>
                        <div>
                            <h1>The lord of the rings</h1>
                        </div>
                    </Col>

                    <Col className='ms-auto'>
                        <NavbarText>
                            Home
                        </NavbarText>
                        <NavbarText>
                            Timeline
                        </NavbarText>
                        <NavbarText>
                            Characters
                        </NavbarText>
                        <NavbarText>
                            Contact
                        </NavbarText>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Header;

