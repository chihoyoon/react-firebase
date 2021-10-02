import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import {Form, Button} from 'react-bootstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUp = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />        
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    onSubmit = e => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return this.props.firebase
                  .user(authUser.user.uid)
                  .set({
                    username,
                    email,
                  });
              })
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
            this.setState({ error });
            });
    
        e.preventDefault();

    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (            
             <Form onSubmit={this.onSubmit} className="w-75 m-5 justify-content-center">
                <Form.Group className="mb-3 col-auto" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name="username" value={username} onChange={this.onChange} type="text" placeholder="Full Name" />                    
                </Form.Group>
                <Form.Group className="mb-3 col-auto">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" value={email} onChange={this.onChange} type="text" placeholder="Email Address" />                  
                </Form.Group>
                <Form.Group className="mb-3 col-auto" name="password" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="passwordOne" value={passwordOne} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 col-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="passwordTwo" value={passwordTwo} onChange={this.onChange} type="password" placeholder="Confirm Password" />
                </Form.Group>                 
                <Button variant="primary" type="submit" disabled={isInvalid}>
                    Sign Up
                </Button>

                {error && <p>{error.message}</p>}
            </Form>             
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUp;
export { SignUpForm, SignUpLink };