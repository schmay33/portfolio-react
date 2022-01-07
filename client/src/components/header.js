import React from 'react';
import PictureOfMe from './picture';
import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <>
                <Nav className="justify-content-center">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
        </>
    )
}

export default Header
