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
    Route
} from 'react-router-dom';
function Custombar() {
    return (
        <div>
            <Router>
                <Navbar className='light'>
                    <Container className={"d-flex justify-content-center align-items-center"}>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/contact'>Contact Me</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path='/' Component={App} />
                    <Route path='/contact' Component={Contact} />
                </Routes>
            </Router>
        </div>    
    );
}

export default Custombar;