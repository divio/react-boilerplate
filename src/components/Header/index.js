import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
                <h2>Welcome to React</h2>
                <NavLink className="header-link" exact to="/">Home</NavLink>
                <NavLink className="header-link" to="/about">About</NavLink>
            </div>
        );
    }
}

export default Header;
