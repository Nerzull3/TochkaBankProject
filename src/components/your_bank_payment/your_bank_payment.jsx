import React, { Component } from 'react';
import './your_bank_payment.css';

class YourBankPaymentForm extends Component {
    render() {
        return (
            <section className="main-content__user-filling-data-2">
                <h3 className="user-filling-data-2__headline">Сформируйте платёжку и загрузите её в свой банк для подписи</h3>
                <ul className="user-filling-data-2__items">
                    <li className="list-item user-filling-data-2__item-1 display_flex_yes">
                        <span className="option-name text_grey_yes">Плательщик</span>
                        <input
                            type="text"
                            className="item__input-value item-1__input-value text_bold_yes"
                            maxLength="12"
                            placeholder="ИНН или название плательщика"
                            pattern="\d{10}|\d{12}"
                        />
                    </li>
                    <li className="list-item user-filling-data-2__item-2 display_flex_yes">
                        <span className="option-name text_grey_yes">БИК</span>
                        <input type="text" className="item__input-value item-2__input-value text_bold_yes" maxLength="9" pattern="\d{9}"/>
                    </li>
                    <li className="list-item user-filling-data-2__item-3 display_flex_yes">
                        <span className="option-name text_grey_yes">Номер счёта</span>
                        <div className="item-3__arrow-bottom-wrapper">
                            <input type="text" className="item__input-value item-3__input-value text_bold_yes" maxLength="20" pattern="\d{20}"/>
                            <div className="item-3__arrow-bottom text_grey_yes">Назначение платежа</div>
                        </div>
                    </li>
                    <li className="list-item user-filling-data-2__item-4 display_flex_yes">
                        <input type="radio" className="string-selector__input-1" id="string-selector__input-1" name="string-selector__input"/>
                        <input type="radio" className="string-selector__input-2" id="string-selector__input-2" name="string-selector__input"/>
                        <input type="radio" className="string-selector__input-3" id="string-selector__input-3" name="string-selector__input" checked/>
                        <span className="option-name text_grey_yes">В том числе</span>
                        <div className="item-4__arrow-bottom-wrapper">
                            <input type="text" className="item__input-value item-4__input-value text_bold_yes" pattern="\d{1000,75000}"/>
                            <div className="arrow-bottom__string-selector">
                                <label className="string-selector__item string-selector__item-1 text_blue_yes" htmlFor="string-selector__input-1">
                                    НДС 18%
                                </label>
                                <label className="string-selector__item string-selector__item-2 text_blue_yes" htmlFor="string-selector__input-2">
                                    НДС 10%
                                </label>
                                <label className="string-selector__item string-selector__item-3 text_blue_yes" htmlFor="string-selector__input-3">
                                    Без НДС
                                </label>
                            </div>
                        </div>
                    </li>
                    <li className="list-item user-filling-data-2__item-5 display_flex_yes">
                        <span className="option-name text_grey_yes">Сумма</span>
                        <input type="text" className="item__input-value item-5__input-value text_bold_yes" maxLength="5" pattern="\d{4,5}"/>
                    </li>
                    <li className="list-item user-filling-data-2__item-6">
                        <button className="item-6__button-type-2 button-type-2">Получить файл для интернет-банка</button>
                    </li>
                    <li className="list-item user-filling-data-2__item-7">
                        <label className="item-7__clean-label clean-label text_blue_yes" htmlFor="">Очистить форму</label>
                    </li>
                </ul>
            </section>
        );
    }
}

export default YourBankPaymentForm;