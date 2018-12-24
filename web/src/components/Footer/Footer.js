import React, {Component} from 'react';
import '../App/App.scss';
import './Footer.scss';
import {NavLink} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <ul className="footer--nav">
                    <NavLink to="/about"
                             activeStyle={{
                                 textDecoration: 'none',
                                 color: '#0a33ba'
                             }}
                             className="footer--nav-item pointer">About</NavLink>
                    <NavLink to="/contact"
                             activeStyle={{
                                 textDecoration: 'none',
                                 color: '#0a33ba'
                             }}
                             className="footer--nav-item pointer">Contact</NavLink>
                </ul>
            </footer>
        );
    }
}

export default Footer;