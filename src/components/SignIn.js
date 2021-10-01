import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import{ compose } from 'recompose';

import { SignUpLink } from './SignUp';
import { withFirebase } from './firebase';
import * as ROUTES from '../constants/routes'

class SignIn extends Component {
    render() {
        return (
            <div>
                <h1>SignIn</h1>
            </div>
        );
    }
}

export default SignIn;