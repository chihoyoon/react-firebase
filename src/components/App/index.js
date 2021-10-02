import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from '../Navigation';
import Landing from '../Landing';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import Home from '../Home';
import Account from '../Account';
import Admin from '../Admin';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />

            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing_} />
                <Route path={ROUTES.SIGN_UP} component={SignUp_} />
                <Route path={ROUTES.SIGN_IN} component={SignIn_} />
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget_} />
                <Route path={ROUTES.HOME} component={Home_} />
                <Route path={ROUTES.ACCOUNT} component={Account_} />
                <Route path={ROUTES.ADMIN} component={Admin_} />
            </Switch>
            
        </div>
        
    </Router>
)


function Landing_() {return <Landing />};
function SignUp_() {return <SignUp />};
function SignIn_() {return <SignIn />};
function PasswordForget_() {return <PasswordForget />};
function Home_() {return <Home />};
function Account_() {return <Account />};
function Admin_() {return <Admin />};



export default withAuthentication(App);