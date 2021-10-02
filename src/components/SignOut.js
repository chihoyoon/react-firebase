import React, { Component } from 'react';

import { withFirebaase } from './firebase';

const SignOutButton = ({ firebase }) => (
    <button type='button' onClick={firebase.doSignOut}>
        Sign doSignOut
    </button>
);

export default withFirebaase(SignOutButton);