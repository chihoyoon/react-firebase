import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import{ compose } from 'recompose';

import {Form, Button} from 'react-bootstrap';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignIn = () => (
    <div>
        <h1>Sign In</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = e => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .doSignInWithEmailAndPassword(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });
        e.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;
        
        const isInvalid = password === '' || email === '';
        
        return (
            <Form onSubmit={this.onSubmit} className="w-75 m-5 justify-content-center">
                <Form.Group className="mb-3 col-auto">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-auto" name="password" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="passwordOne" value={password} type="password" placeholder="Password" />
                </Form.Group>                 
                <Button variant="primary" type="submit" disabled={isInvalid}>
                    Sign In
                </Button>

                {error && <p>{error.message}</p>}
            </Form> 
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,    
)(SignInFormBase);

export default SignIn;

export { SignInForm }