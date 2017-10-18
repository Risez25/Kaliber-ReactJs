import React, { Component } from 'react';
import {
    Navbar, NavItem, Nav,Image
} from 'react-bootstrap';
import Scroll from 'react-scroll'; // Imports all Mixins

// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;

class Navigation extends Component{
    render(){
        
        return(
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse >
                <Nav style={{marginLeft:270}}>
                    <NavItem>
                        <Link to="Home" spy={true} smooth={true} duration={500}>
                        <Image style={{width:30,height:30}} src={require("../../assets/Kaliber Logo-03.png")} />
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="Solution" smooth={true} duration={500}>
                        Soution
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="Simulation" spy={true} smooth={true} duration={500}>
                        Simulation
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="Engines" offset={600} spy={true} smooth={true} duration={500}>
                        Engines
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="Client" offset={200} spy={true} smooth={true} duration={500}>
                        Clients
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="Contact" offset={800} spy={true} smooth={true} duration={500}>
                        Contact
                        </Link>
                    </NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;