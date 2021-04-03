import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState(prev => ({
            isNavOpen: !prev.isNavOpen
        }))
    }


    render() {
        const { isNavOpen } = this.state
        return (
            <header>
                <div className="container-header">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Atta &amp; Aurel Wedding</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#guestForm">Guest Form</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#story">Story</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#prewedding">Pre Wedding</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#wedding">The Wedding</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText>1 Januari 2022</NavbarText>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        );
    }
}
