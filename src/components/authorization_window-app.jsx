import React, { Component } from 'react';
import FooterContent from './footer/footer';
import AuthWindow from './authorization_window/authorisation_window';
import './router/App.css';

class AuthWindowApp extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <AuthWindow />
                <FooterContent />
            </div>
        );
    }
}

export default AuthWindowApp;
