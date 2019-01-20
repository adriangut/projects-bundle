import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className="nav navbar-nav">
                    {this.props.authenticated ? (
                        <li className="nav-item">
                            <Link className="nav-link" to="/signout">Sign Out</Link>
                        </li>
                    ) : (
                        <li className="nav-item">
                            <li className="nav-item" key={1}>
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <li className="nav-item" key={2}>
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                        </li>
                    )}
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({ authenticated: state.auth.authenticated });

export default connect(mapStateToProps)(Header);
