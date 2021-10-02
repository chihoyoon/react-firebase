import React from 'react';

import { withFirebaase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button type='button' onClick={firebase.doSignOut}>
        Sign doSignOut
    </button>
);

export default withFirebaase(SignOutButton);