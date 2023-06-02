import React from 'react';
import './contact.css';
import Contactpic from "./contact.jpg"
import emaillogo from "./email.svg"
import linkedin from "./link.svg"
import twit from "./twitter.svg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
    return (
        <div className="Contact-header">
            <img className='contactpic' src={Contactpic} alt="Grad Pic" />
            <p className='intro'>Hi, I'm glad you found my site! I'm a recent graduate of Virginia Tech Computer Science.
                I have experience programming in Java, Python, C, Kotlin, and React JS; I would also love to work with new languages.
                I am currently looking for programming and cybersecurity roles.
                Outside of programming skills, I have experience with network and server administration,
                advanced hardware and software troubleshooting, and penetration testing.</p>
            <Container className='icons-container'>
                <Row>
                    <Col xs="auto"><img src={emaillogo} className='icons' /></Col>
                    <Col xs="auto"><img src={linkedin} className='icons' /></Col>
                    <Col xs="auto"><img src={twit} className='icons'/></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;