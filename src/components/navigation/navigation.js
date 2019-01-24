import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

class Navigation extends React.Component {
    state = {
        pay: true,
        anyBank: true
    };

    render() {
        return (
            <section className="navigation">
                <div className="main-content__query">
                    <span className="query__headline text_bold_yes">Выберите опцию:</span>
                    <NavLink
                        to={this.state.anyBank ? "/payment/any_bank_payment" : "/payment/your_bank_payment"}
                        onClick={this.onPay}
                        className="link query__label query-1 text_blue_yes text_bold_yes"
                        activeClassName="link_activated"
                    >Заплатить</NavLink>
                
                    <NavLink
                        to="/request_payment"
                        onClick={this.onRequestPayment}
                        className="link query__label query-2 text_blue_yes text_bold_yes"
                        activeClassName="link_activated"
                    >Запросить платёж</NavLink>
                </div>
                { this.state.pay === true ?
                <div className="main-content__payment-option">
                    <NavLink
                        to="/payment/any_bank_payment"
                        onClick={this.onPayAnyBank}
                        className="link payment-option__option option-1"
                        activeClassName="link_activated"
                    >С карты любого банка</NavLink>
                
                    <NavLink
                        to="/payment/your_bank_payment"
                        onClick={this.onPayYourBank}
                        className="link payment-option__option option-2"
                        activeClassName="link_activated"
                    >Из своего интернет-банка</NavLink>
                </div>
                : ""}
            </section>
        );
    }

    onPay = () => this.setState({pay: true, anyBank: this.state.anyBank});
    onRequestPayment = () => this.setState({pay: false, anyBank: this.state.anyBank});
    onPayAnyBank = () => this.setState({pay: this.state.pay, anyBank: true});
    onPayYourBank = () => this.setState({pay: this.state.pay, anyBank: false});
}

export default Navigation;