import React from 'react';
import './contact.css';
import 'reactjs-popup/dist/index.css';
import Contactpic from "./contact.jpg"
import emaillogo from "./email.svg"
import linkedin from "./link.svg"
import twit from "./twitter.svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popup from 'reactjs-popup';


function Contact() {
    return (
        <div className="Contact-header">
            <img className='contactpic' src={Contactpic} alt="Grad Pic" />
            <p className='intro'>Hi! I'm a recent graduate of Virginia Tech Computer Science.
                I have experience programming in Java, Python, C, Kotlin, and React JS; I would also love to work with new languages.
                I am currently looking for programming and cybersecurity roles.
                Outside of programming skills, I have experience with network and server administration,
                advanced hardware and software troubleshooting, and penetration testing.</p>
            <Container className='icons-container'>
                <Row>
                    <Popup trigger={ <Col xs="auto"><img onClick={() => {navigator.clipboard.writeText("saideepak.yerra@gmail.com")}} src={emaillogo} className='icons' alt="email"/></Col>}> <a>Email copied to clipboard.</a> </Popup> 
                    <Col xs="auto"><a href="https://www.linkedin.com/in/saidyerra/" target="_blank" rel="noreferrer"><img src={linkedin} className='icons' alt="linkedin" /></a></Col>
                    <Col xs="auto"><a href="https://twitter.com/saiyerraa" target="_blank" rel="noreferrer"><img src={twit} className='icons' alt="twitter" /></a></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;