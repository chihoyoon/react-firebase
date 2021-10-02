import React, { Component } from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';

class Session extends Component {
    render() {
        return (
            <div>
                <h1>Session</h1>
            </div>
        );
    }
}

export default Session;
export { AuthUserContext, withAuthentication };