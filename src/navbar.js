import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Contact from './contact.js'
import App from './App.js'
import './navbar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    HashRouter
} from 'react-router-dom';
function Custombar() {
    return (
        <div>
            <HashRouter hashType="" basename='/'>
                <Navbar className='light'>
                    <Container className={"d-flex justify-content-center align-items-center"}>
                        <Nav>
                            <Nav.Link href='/#/'>Home</Nav.Link>
                            <Nav.Link href='/#/about'>About Me</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/' Component={App} />
                    <Route path='about' Component={Contact} />
                </Routes>
            </HashRouter>
        </div>    
    );
}

export default Custombar;