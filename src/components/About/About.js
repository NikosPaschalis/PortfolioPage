import React from 'react';
import Typical from 'react-typical'
import { Row, Col, Button, Image } from 'react-bootstrap';
import './About.css';
import user from '../../assets/user.png';

const About = () => (
    <React.Fragment >
        <Row>
            <Col xs = {12}>
            <h1 id="home"> <Image src={user}  roundedCircle /> Hi, I'm Nikos Paschalis</h1>
                
                
                <h4>
                    I'm a{' '}
                    <Typical
                        steps={['Web Developer 💻', 1000, 'Photography Enthusiast 📸', 1000, 'Gaming Fanatic 🎮', 1000, 'Coffee Junkie ☕', 1000]}
                        loop={Infinity}
                        wrapper="b"
                    />
                </h4>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p>
                    I am a junior web developer with Bs in Computer Science from University of Peloponnese. I created this site from scratch to document and practice what I learn.
                    My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study. 
                    I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
                    Currently looking for opportunities (part-time occupation or full-time job)
                    in order to sharpen my skills and gain experience.
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="src\assets\Profile.pdf" download><Button variant="dark">My Resume</Button></a>
            </Col>
        </Row>
    </React.Fragment>
)

export default About;
