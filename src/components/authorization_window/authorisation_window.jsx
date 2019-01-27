import React, { Component } from 'react';
import './authorization_window.css';

class AuthWindow extends Component {
    render() {
        return (
            <div className="root-wrapper">
                <header className="header">
                    <h1 className="header__title">Авторизация</h1>
                    <hr className="decoration-line" />
                    <p className="header__info">Авторизуйтесь, чтобы начать работу</p>
                </header>
                <main className="main-window">
                    <form action="/auth_window" className="input-form" method="post">
                        <div className="input-wrapper-block">
                            <input
                                type="email"
                                className="login__input"
                                name="login"
                                placeholder="введите логин"
                                required
                            />
                            <div className="error-handler">Неверный логин</div>
                        </div>
                        <div className="input-wrapper-block">
                            <input
                                type="password"
                                className="password__input"
                                name="password"
                                placeholder="введите пароль"
                                required
                            />
                            <div className="error-handler">Неверный пароль</div>
                        </div>
                        <div className="button-item">
                            <button type="submit" className="log-in__button button-item__pay-button">Войти</button>
                        </div>
                    </form>
                </main>
            </div>
        );
    }    
}

export default AuthWindow;