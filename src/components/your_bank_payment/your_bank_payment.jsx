import React from 'react';
import InputMask from 'react-input-mask';
import './your_bank_payment.css';
import YourBankValidation from '../validations/your_bank_validation';

class YourBankPaymentForm extends YourBankValidation {
    render() {
        return (
            <section className="main-content__user-filling-data-2">
                <h3 className="user-filling-data-2__headline">Сформируйте платёжку и загрузите её в свой банк для подписи</h3>
                <form action="/your_bank_payment" method="post">
                    <ul className="user-filling-data-2__items">
                        <li className="list-item user-filling-data-2__item-1 display_flex_yes">
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
                        <li className="list-item user-filling-data-2__item-2 display_flex_yes">
                            <span className="option-name text_grey_yes">БИК</span>
                            <InputMask
                                type="tel" 
                                className="item__input-value item-2__input-value text_bold_yes"
                                name="bik"
                                mask="999999999"
                                pattern="\d{9}"
                                value={this.state.bik}
                                onChange={this.handleUserInput}
                            />
                        </li>
                        <li className="list-item user-filling-data-2__item-3 display_flex_yes">
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
                        <li className="list-item user-filling-data-2__item-4 display_flex_yes">
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
                                        name="string-selector-1" 
                                        onClick={this.setVAT.bind(this, 1)}
                                    >
                                        НДС 18%
                                    </span>
                                    <span
                                        className="string-selector__item string-selector__item-2 text_blue_yes"
                                        name="string-selector-2"
                                        onClick={this.setVAT.bind(this, 2)}
                                    >
                                        НДС 10%
                                    </span>
                                    <span
                                        className="string-selector__item string-selector__item-3 text_blue_yes"
                                        name="string-selector-3"
                                        onClick={this.setVAT.bind(this, 3)}
                                    >
                                        Без НДС
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li className="list-item user-filling-data-2__item-5 display_flex_yes">
                            <span className="option-name text_grey_yes">Сумма</span>
                            <input
                                type="tel"
                                className="item__input-value item-5__input-value text_bold_yes"
                                name="sum"
                                maxLength="5"
                                pattern="\d{4,5}"
                                onChange={this.handleUserInput}
                                value={this.state.sum}
                            />
                        </li>
                        <li className="list-item user-filling-data-2__item-6 button-item">
                            <button
                                type="submit"
                                className="item-6__button button-item__pay-button"
                                disabled={!this.state.formValid}
                            >Получить файл для интернет-банка</button>
                        </li>
                        <li className="list-item user-filling-data-2__item-7">
                            <span
                                className="item-7__clean-label clean-label text_blue_yes"
                                onClick={this.cleanFields.bind(this)}
                            >Очистить форму</span>
                        </li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default YourBankPaymentForm;