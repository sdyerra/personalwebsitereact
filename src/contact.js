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
            <p className='intro'>Hi there! I'm a recent graduate of Virginia Tech with a degree in Computer Science. I have experience programming in languages such as Java, Python, C, Kotlin, and React JS. Beyond programming, my skill set includes network and server administration, advanced hardware/software troubleshooting, and penetration testing. When I'm not immersed in the world of computers, you can find me working on my car or spending quality time with my dogs.</p>
            <Container className='icons-container'>
                <Row>
                    <Popup position='top' trigger={ <Col xs="auto"><img onClick={() => {navigator.clipboard.writeText("sdy@saiyerra.com")}} src={emaillogo} className='icons' alt="email"/></Col>}> <a>Email copied to clipboard.</a> </Popup> 
                    <Col xs="auto"><a href="https://www.linkedin.com/in/saidyerra/" target="_blank" rel="noreferrer"><img src={linkedin} className='icons' alt="linkedin" /></a></Col>
                    <Col xs="auto"><a href="https://twitter.com/saiyerraa" target="_blank" rel="noreferrer"><img src={twit} className='icons' alt="twitter" /></a></Col>
                </Row>
            </Container>
        </div>
    );
}
export default Contact;