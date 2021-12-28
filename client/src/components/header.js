import React from 'react';
import PictureOfMe from './picture';
import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar bg="#8EB8E5" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <Stack direction="horizontal" gap="3">
                        <PictureOfMe height="60" width="60" id="profile_pic" />
                        <span>Nathan Schmidt</span>
                    </Stack>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
