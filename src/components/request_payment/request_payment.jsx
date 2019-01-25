import React from 'react';
import InputMask from 'react-input-mask';
import './request_payment.css';
import user from '../database/users';
import RequestPaymentValidation from '../validations/request_payment_validation';


class RequestPaymentForm extends RequestPaymentValidation {
    render() {
        return (
            <section className="main-content__user-filling-data-3">
                <h3 className="user-filling-data-3__headline">
                    Создайте платёжку, а<span className="title__name">{user.name}</span>подпишет её у себя в интернет-банке
                </h3>
                <form action="/request_payment" method="post">
                    <ul className="user-filling-data-3__items">
                        <li className="list-item user-filling-data-3__item-1 display_flex_yes">
                            <span className="option-name text_grey_yes">Плательщик</span>
                            <input
                                type="text"
                                className="item__input-value item-1__input-value text_bold_yes"
                                name="payer"
                                maxLength="12"
                                placeholder="ИНН или название плательщика"
                                pattern="\d{10}|\d{12}"
                                value={this.state.payer}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-3__item-2 display_flex_yes">
                            <span className="option-name text_grey_yes">БИК</span>
                            <InputMask
                                type="text"
                                className="item__input-value item-2__input-value text_bold_yes"
                                name="bik"
                                mask="999999999"
                                pattern="\d{9}"
                                value={this.state.bik}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-3__item-3 display_flex_yes">
                            <span className="option-name text_grey_yes">Номер счёта</span>
                            <div className="item-3__arrow-bottom-wrapper">
                                <InputMask
                                    type="tel"
                                    className="item__input-value item-3__input-value text_bold_yes"
                                    name="accountNumber"
                                    mask="99999999999999999999"
                                    pattern="\d{20}"
                                    value={this.state.accountNumber}
                                    onChange={this.handleUserInput}
                                />
                                <div className="item-3__arrow-bottom text_grey_yes">Назначение платежа</div>
                            </div>
                        </li>
                        <li className="list-item user-filling-data-3__item-4 display_flex_yes">
                            <span className="option-name text_grey_yes">В том числе</span>
                            <div className="item-4__arrow-bottom-wrapper">
                                <input
                                    type="text"
                                    className="item__input-value item-4__input-value text_bold_yes"
                                    name="VATtype"
                                    value={this.state.VATtype}
                                    onChange={this.handleUserInput}
                                    readOnly
                                />
                                <div className="arrow-bottom__string-selector">
                                    <span
                                        className="string-selector__item string-selector__item-1 text_blue_yes"
                                        onClick={this.setVAT.bind(this, 1)}
                                    >
                                        НДС 18%
                                    </span>
                                    <span
                                        className="string-selector__item string-selector__item-2 text_blue_yes"
                                        onClick={this.setVAT.bind(this, 2)}
                                    >
                                        НДС 10%
                                    </span>
                                    <span
                                        className="string-selector__item string-selector__item-3 text_blue_yes"
                                        onClick={this.setVAT.bind(this, 3)}
                                    >
                                        Без НДС
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="list-item user-filling-data-3__item-5 display_flex_yes">
                            <span className="option-name text_grey_yes">Сумма</span>
                            <input
                                type="tel"
                                className="item__input-value item-5__input-value text_bold_yes"
                                name="sum"
                                maxLength="5"
                                pattern="\d{4,5}"
                                value={this.state.sum}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-3__item-6 display_flex_yes">
                            <span className="option-name text_grey_yes">Телефон</span>
                            <InputMask
                                type="tel"
                                className="item__input-value item-6__input-value text_bold_yes"
                                name="phone"
                                mask="+7 (999) 999-99-99"
                                pattern="+7 (\d{3}) \d{3}-\d{2}-\d{2}"
                                value={this.state.phone}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-3__item-7 display_flex_yes">
                            <span className="option-name text_grey_yes">Эл. почта</span>
                            <input
                                type="email"
                                className="item__input-value item-6__input-value text_bold_yes"
                                name="mail"
                                maxLength="30"
                                value={this.state.mail}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-3__item-8 button-item">
                            <button
                                type="submit"
                                className="item-8__button button-item__pay-button"
                                disabled={!this.state.formValid}>Создать платёж</button>
                        </li>
                        <li className="list-item user-filling-data-3__item-9">
                            <span
                                className="item-9__clean-label clean-label text_blue_yes"
                                onClick={this.cleanFields.bind(this)}
                            >Очистить форму</span>
                        </li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default RequestPaymentForm;