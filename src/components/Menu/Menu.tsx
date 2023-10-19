import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <nav>
                    <ul className="menu-list">
                        <li className="dropdown">
                            <div className="menu-dropdown">
                                <a href="">Home</a>
                                <span className="icon-arrow"></span>
                            </div>
                            <div className="dropdown-content">
                                <a href="">Home - Default</a>
                                <a href="">Home - Alternate</a>
                            </div>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Properties</a>
                        </li>
                        <li>
                            <a href="">News</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
        // <Navbar expand="lg" className="bg-body-tertiary menu">
        //     <Container>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <NavDropdown title="Home" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">
        //                         Home - Default
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Home - Alternate
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="#about">About</Nav.Link>
        //                 <Nav.Link href="#properties">Properties</Nav.Link>
        //                 <Nav.Link href="#news">News</Nav.Link>
        //                 <Nav.Link href="#contact">Contact</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}
export default Menu
