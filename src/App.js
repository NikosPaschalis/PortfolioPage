import React from 'react';
import './App.css';
import Layout from './components/Layout';
import About from './components/About/About';
import Navigationbar from './components/Navbar/Navbar';
import { Row,Col } from 'react-bootstrap';
import Project from './components/Project/Project';
import Experrience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Layout >
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
              <Project name="CryptoCompare" description="Simple cryptocompare addOn for google chrome" gitLink = "https://github.com/NikosPaschalis/CryptoCompare"/>
            </Col>
            <Col className="spacing" xs={12} md={6} lg={4}>
              <Project name="HackerNews" description="React application fetching articles from hacker news" gitLink = "https://github.com/NikosPaschalis/HackerNews"/>
            </Col>
        </Row>
        {/* <Row>
          <Col className="spacing" xl={{ span: 4, offset: 4 }}><Project name="Test" description="testing" /></Col>
        </Row> */}
        <Contact />
        
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
