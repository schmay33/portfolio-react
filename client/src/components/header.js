import React from 'react';
import PictureOfMe from './picture';
import Navbar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Stack direction="horizontal" gap="3">
                            <PictureOfMe height="60" width="60" id="profile_pic" />
                            <span>Nathan Schmidt</span>
                        </Stack>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Portfolio</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
