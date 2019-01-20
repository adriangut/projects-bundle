import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../ducks';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (<div>We hope to see you again soon!</div>);
    }
}

export default connect(null, actions)(Signout);
