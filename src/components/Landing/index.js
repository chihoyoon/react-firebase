import React, { Component } from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import {Navbar, Container, Nav} from 'react-bootstrap';

import Main from './Main';
import About from './About';
import Credential from './Credential';
import Service from './Service';
import Testimonials from './Testimonials';
import Contact  from './Contact';
import Footer from './Footer';

class Landing extends Component {
    
  render () {
      return (
        <div className="App">
            <BrowserRouter>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <h3 className="text-dark">Harmonia Wellness</h3>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">MAIN</Link></Nav.Link>
                            <Nav.Link><Link to="/about">ABOUT</Link></Nav.Link>
                            <Nav.Link><Link to="/credential">CREDENTIAL</Link></Nav.Link>
                            <Nav.Link><Link to="/service">SERVICE</Link></Nav.Link>
                            <Nav.Link><Link to="/testimonials">TESTIMONIALS</Link></Nav.Link>
                            <Nav.Link><Link to="/contact">CONTACT</Link></Nav.Link>                                                                                 
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>      
                <Switch>
                    <Route exact path="/" component={Main_}></Route>
                    <Route path="/about" component={About_}></Route>
                    <Route path="/credential" component={Credential_}></Route>
                    <Route path="/service" component={Service_}></Route>
                    <Route path="/testimonials" component={Testimonials_}></Route>
                    <Route path="/contact" component={Contact_}></Route>                  
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
      );    
  } 
}

function Main_() {return <Main />};
function About_() {return <About />};
function Credential_() {return <Credential />};
function Service_() {return <Service />};
function Testimonials_() {return <Testimonials />};
function Contact_() {return <Contact />};

export default Landing;
