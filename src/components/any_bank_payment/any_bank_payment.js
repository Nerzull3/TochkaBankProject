import React, { Component } from 'react';
import './any_bank_payment.css';
import visa from './svg_images/visa.svg';
import mc1 from './svg_images/mastercard.svg';
import mc2 from './svg_images/mastercard-2.svg';

class AnyBankPaymentForm extends Component {
    render() {
        return (
            <section class="main-content__user-filling-data-1">
                <form class="card-data__input-fields" method="POST">
                    <div class="user-filling-data__credit-card">
                        <div class="card-icons">
                            <img class="card-icon card-icon-1" src={visa} alt="Visa"/>
                            <img class="card-icon card-icon-2" src={mc1} alt="MasterCard"/>
                            <img class="card-icon card-icon-3" src={mc2} alt="MasterCard"/>
                        </div>
                        <div class="card-data__input">
                            <div class="card-number card__fill-area">
                                <input
                                    type="tel"
                                    class="card-number__input card__input"
                                    name="card-number"
                                    maxlength="16"
                                    pattern="\d{16}"
                                    placeholder="Введите номер карты"
                                />
                                <div class="card-number__error-handler error-handler">
                                    Символами могут быть только цифры. Ровно 16 символов
                                </div>
                            </div>
                            <div class="card-issue-date card__fill-area">
                                <input
                                    type="text"
                                    class="card-issue-date__input card__input"
                                    maxlength="4"
                                    pattern="\d{4}"
                                    placeholder="ММ/ГГ"
                                />
                                <div class="card-issue-date__error-handler error-handler">
                                    Символами могут быть только цифры
                                </div>
                            </div>
                            <div class="card-cvc card__fill-area">
                                <input
                                    type="tel"
                                    class="card-cvc__input card__input"
                                    maxlength="3"
                                    pattern="\d{3}"
                                    placeholder="CVC"
                                />
                                <div class="card-cvc__error-handler error-handler">
                                    Символами могут быть только цифры
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="user-filling-data__data-for-sending">
                        <li class="list-item sum-item display_flex_yes">
                            <span class="list-item__text sum text_bold_yes">Сумма</span>
                            <input
                                type="text"
                                class="list-item__text list-item__value sum__value"
                                placeholder="от 1000 до 75000 руб."
                            />
                        </li>
                        <li class="list-item comment-item display_flex_yes">
                            <span class="list-item__text comment text_bold_yes">Комментарий</span>
                            <input
                                type="text"
                                class="list-item__text list-item__value comment__value"
                                placeholder="до 150 символов"
                            />
                        </li>
                        <li class="list-item email-item display_flex_yes">
                            <span class="list-item__text email text_bold_yes">Ваша эл. почта</span>
                            <input
                                type="text"
                                class="list-item__text list-item__value email__value"
                                placeholder="Для квитанций об оплате"
                            />
                        </li>
                        <li class="list-item button-item display_flex_yes">
                            <button class="button-item__pay-button">Заплатить</button>
                        </li>
                    </ul>
                </form>
            </section>
        );
    }
}

export default AnyBankPaymentForm;