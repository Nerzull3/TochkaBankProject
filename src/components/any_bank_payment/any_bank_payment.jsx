import React from 'react';
import './any_bank_payment.css';
import visa from './svg_images/visa.svg';
import mc1 from './svg_images/mastercard.svg';
import mc2 from './svg_images/mastercard-2.svg';
import AnyBankValidation from '../validations/any_bank_validation';

class AnyBankPaymentForm extends AnyBankValidation {
    render() {
        return (
            <section className="main-content__user-filling-data-1">
                <form className="card-data__input-fields" method="post">
                    <div className="user-filling-data__credit-card">
                        <div className="card-icons">
                            <img className="card-icon card-icon-1" src={visa} alt="Visa"/>
                            <img className="card-icon card-icon-2" src={mc1} alt="MasterCard"/>
                            <img className="card-icon card-icon-3" src={mc2} alt="MasterCard"/>
                        </div>
                        <div className="card-data__input">
                            <div className="card-number card__fill-area">
                                <input
                                    type="tel"
                                    className="card-number__input card__input"
                                    name="card-number"
                                    maxLength="16"
                                    pattern="\d{16}"
                                    placeholder="Введите номер карты"
                                    defaultValue={this.state.cardNumber}
                                    onChange={this.handleUserInput}
                                />
                                <div className="card-number__error-handler error-handler">
                                    Символами могут быть только цифры. Ровно 16 символов
                                </div>
                            </div>
                            <div className="card-issue-date card__fill-area">
                                <input
                                    type="text"
                                    className="card-issue-date__input card__input"
                                    name="card-issue-date"
                                    maxLength="5"
                                    pattern="\d{2}/\d{2}"
                                    placeholder="ММ/ГГ"
                                    defaultValue={this.state.cardIssueDate}
                                    onChange={this.handleUserInput}
                                />
                                <div className="card-issue-date__error-handler error-handler">
                                    Символами могут быть только цифры
                                </div>
                            </div>
                            <div className="card-cvc card__fill-area">
                                <input
                                    type="tel"
                                    className="card-cvc__input card__input"
                                    name="card-cvc"
                                    maxLength="3"
                                    pattern="\d{3}"
                                    placeholder="CVC"
                                    defaultValue={this.state.cardCVC}
                                    onChange={this.handleUserInput}
                                />
                                <div className="card-cvc__error-handler error-handler">
                                    Символами могут быть только цифры
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="user-filling-data__data-for-sending">
                        <li className="list-item sum-item display_flex_yes">
                            <span className="list-item__text sum text_bold_yes">Сумма</span>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="list-item__text list-item__value sum__value"
                                    name="sum"
                                    placeholder="от 1000 до 75000 руб."
                                    maxLength="5"
                                    pattern="\d{4,5}"
                                    defaultValue={this.state.sum}
                                    onChange={this.handleUserInput}
                                />
                                <div className="sum__error-handler error-handler">
                                    От 1000 до 75000 рублей.
                                </div>
                            </div>
                        </li>
                        <li className="list-item comment-item display_flex_yes">
                            <span className="list-item__text comment text_bold_yes">Комментарий</span>
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="list-item__text list-item__value comment__value"
                                    name="comment"
                                    placeholder="до 150 символов"
                                    maxLength="150"
                                    defaultValue={this.state.comment}
                                />
                            </div>
                        </li>
                        <li className="list-item email-item display_flex_yes">
                            <span className="list-item__text email text_bold_yes">Ваша эл. почта</span>
                            <div className="input-wrapper">
                                <input
                                    type="email"
                                    className="list-item__text list-item__value email__value"
                                    name="mail"
                                    placeholder="Для квитанций об оплате"
                                    maxLength="40"
                                    defaultValue={this.state.mail}
                                    onChange={this.handleUserInput}
                                />
                                <div className="sum__error-handler error-handler">
                                    Некорректно указана почта.
                                </div>
                            </div>
                        </li>
                        <li className="list-item button-item display_flex_yes">
                            <button
                                type="submit"
                                className="button-item__pay-button"
                                disabled={!this.state.formValid}
                            >Заплатить</button>
                        </li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default AnyBankPaymentForm;