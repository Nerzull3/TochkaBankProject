import React from 'react';
import './info_about_user.css';
import logo from './kiwi.jpg';
import RequisitesList from './requisitesList';
import userInfo from '../database/users';

class MainInfo extends React.Component {
    render() {
        return (
            <section class="headline">
                <div class="headline__info">
                    <h2 class="info__title title__name">{userInfo.name}</h2>
                    <input type="checkbox" class="show-hide-requisites" id="show-hide-requisites" name="show-hide-requisites"/>
                    <ul class="info__requisites">
                        <li class="list-item">
                            <span class="text_grey_yes margin-right_yes">Номер телефона:</span>
                            <span class="requisites__phone-number">{userInfo.phoneNumber}</span>
                        </li>
                        <li class="list-item">
                            <span class="text_grey_yes margin-right_yes">Веб-сайт:</span>
                            <a class="person-website requisites-link link text_blue_yes" href="#">{userInfo.website}</a>
                        </li>
                        <li class="list-item">
                            <span class="text_grey_yes margin-right_yes">Электронная почта:</span>
                            <a class="person-email requisites-link link text_blue_yes" href="#">{userInfo.email}</a>
                        </li>
                        <li class="list-item">
                            <span class="text_grey_yes margin-right_yes">Дополнительная информация:</span>
                            <a class="info-about-company requisites-link link text_blue_yes" href="#">{userInfo.additionalInfo}</a>  
                        </li>
                        <li class="list-item">
                            <label class="show-requisites requisites-link text_blue_yes" for="show-hide-requisites">
                                Показать реквизиты
                            </label>
                            <div class="requisites-block">
                                <RequisitesList requisites={userInfo.requisites} />
                                <label class="hide-requisites text_blue_yes" for="show-hide-requisites">Скрыть реквизиты</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="headline__image">
                    <img class="logo__image" src={logo} alt="logo"/>
                </div>
            </section>
        );
    }
}

export default MainInfo;