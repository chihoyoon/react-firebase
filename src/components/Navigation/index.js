import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

const Navigation = () => (
    <div>
        <AuthUserContext.Consumer>
        {authUser => 
            authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
        </AuthUserContext.Consumer>
    </div>
);

const NavigationAuth = () => (
    <Navbar bg="dark" expand="lg">
        <Container>
            <h3 className="text-warning">Harmonia Wellness</h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to={ROUTES.LANDING}>SHOW ROOM</Link></Nav.Link>
                <Nav.Link><Link to={ROUTES.HOME}>HOME</Link></Nav.Link>
                <Nav.Link><Link to={ROUTES.ACCOUNT}>ACCOUNT</Link></Nav.Link>
                <Nav.Link><Link to={ROUTES.ADMIN}>ADMIN</Link></Nav.Link>
                <Nav.Link><SignOutButton /></Nav.Link>                                                                                    
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

const NavigationNonAuth = () => (
    <Navbar bg="dark" expand="lg">
        <Container>
            <h3 className="text-warning">Harmonia Wellness</h3>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link to={ROUTES.LANDING}>SHOW ROOM</Link></Nav.Link>
                <Nav.Link><Link to ={ROUTES.SIGN_IN}>SIGN IN</Link></Nav.Link>                                                                                   
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default Navigation;