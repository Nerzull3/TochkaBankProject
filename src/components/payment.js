import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/navigation/navigation';
import AnyBankPaymentForm from '../components/any_bank_payment/any_bank_payment';
import YourBankPaymentForm from '../components/your_bank_payment/your_bank_payment';
import RequestPaymentForm from '../components/request_payment/request_payment';

class Payment extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={AnyBankPaymentForm} />
                        <Route path="/payment/any_bank_payment" component={AnyBankPaymentForm} />
                        <Route path="/payment/your_bank_payment" component={YourBankPaymentForm} />
                        <Route path="/request_payment" component={RequestPaymentForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Payment;