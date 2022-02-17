import React from 'react';
import './App.css';
import About from './components/About/About';
import Navigationbar from './components/Navbar/Navbar';
import { Row,Col } from 'react-bootstrap';
import Project from './components/Project/Project';
import Experrience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Container >
        <About />
        <Experrience />
        <Row>
          <Col><h1 id="projects">Projects</h1></Col>
        </Row>
        <Row>
            <Col className="spacing" xs={12} md={6} lg={4}>
              <Project name="CodingBooks"
               description="A personal project about requesting and find coding books." gitLink = "https://github.com/NikosPaschalis/FreeCodingBooks"/>
            </Col>
            <Col className="spacing" xs={12} md={6} lg={4}>
              <Project name="CryptoCompare" description="Simple cryptocompare addOn for google chrome." gitLink = "https://github.com/NikosPaschalis/CryptoCompare"/>
            </Col>
            <Col className="spacing" xs={12} md={6} lg={4}>
              <Project name="HackerNews" description="React application fetching articles from hacker news." gitLink = "https://github.com/NikosPaschalis/HackerNews"/>
            </Col>
            <Col className="spacing" xs={12} md={12} lg={12}>
              <Project name="Comic-Bot" description="Project made with React and React-chatbot-kit to provide users with links of comic books." gitLink = "https://github.com/NikosPaschalis/comic-bot"/>
            </Col>
        </Row>
        <Contact />
        
      </Container>
      <Footer />
    </div>
  );
}

export default App;
