import React from 'react';
import './Contact.css';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobile,faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <h1 id="contact">Contact Information</h1>
                </Col>
            </Row>
            <Row>
                <Col xs = {12} lg = {4}><h5><a href = "https://github.com/NikosPaschalis">Github <Badge variant="dark"><FontAwesomeIcon icon={faGithub} /></Badge></a></h5></Col>
                <Col xs = {12} lg = {4}><h5><a href = "https://www.linkedin.com/in/nikospasxalis/">LinkedIn <Badge variant="primary"><FontAwesomeIcon icon={faLinkedin} /></Badge></a></h5></Col>
                <Col xs = {12} lg = {4}><h5><a href = "https://www.facebook.com/nikos.pasxalis.5/">Facebook <Badge variant="primary"><FontAwesomeIcon icon={faFacebook} /></Badge></a></h5></Col>
            </Row>
            <Row>
                <Col xs = {12} lg = {6}><h5>nikospasxalis94@gmail.com <Badge variant="info"><FontAwesomeIcon icon={faEnvelopeSquare} /></Badge></h5></Col>
                <Col xs = {12} lg = {6}><h5>+30 6976391613 <Badge variant="dark"><FontAwesomeIcon icon={faMobile} /></Badge></h5></Col>
            </Row>
        </React.Fragment>

    );
}

export default Contact;