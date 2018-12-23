import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import '../App/App.scss';
import './Header.scss';
import Image  from 'react-bootstrap/lib/Image';

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <NavLink to="/">
                    <Image  src={logo} alt="logo"
                         className="header--logo pointer"/>
                </NavLink>

                <ul className="header--collapse">
                    <NavLink to="/about"
                             activeStyle={{
                                 textDecoration: 'none',
                                 color: 'black'
                             }}
                             className="header--collapse-item pointer">About</NavLink>
                    <NavLink to="/contact"
                             activeStyle={{
                                 textDecoration: 'none',
                                 color: 'black'
                             }}
                             className="header--collapse-item pointer">Contact</NavLink>
                </ul>
            </nav>
        );
    }
}

export default Header;
