import React from 'react';
import './info_about_user.css';
import logo from './kiwi.jpg';
import RequisitesList from './requisitesList';
import userInfo from '../database/users';

class MainInfo extends React.Component {
    render() {
        return (
            <section className="headline">
                <div className="headline__info">
                    <h2 className="info__title title__name">{userInfo.name}</h2>
                    <input type="checkbox" className="show-hide-requisites" id="show-hide-requisites" name="show-hide-requisites"/>
                    <ul className="info__requisites">
                        <li className="list-item">
                            <span className="text_grey_yes margin-right_yes">Номер телефона:</span>
                            <span className="requisites__phone-number">{userInfo.phoneNumber}</span>
                        </li>
                        <li className="list-item">
                            <span className="text_grey_yes margin-right_yes">Веб-сайт:</span>
                            <a className="person-website requisites-link link text_blue_yes" href={userInfo.website}>{userInfo.website}</a>
                        </li>
                        <li className="list-item">
                            <span className="text_grey_yes margin-right_yes">Электронная почта:</span>
                            <a className="person-email requisites-link link text_blue_yes" href={userInfo.email}>{userInfo.email}</a>
                        </li>
                        <li className="list-item">
                            <span className="text_grey_yes margin-right_yes">Дополнительная информация:</span>
                            <a className="info-about-company requisites-link link text_blue_yes" href="https://universal_en_ru.academic.ru/384107/additional_info">{userInfo.additionalInfo}</a>  
                        </li>
                        <li className="list-item">
                            <label className="show-requisites requisites-link text_blue_yes" htmlFor="show-hide-requisites">
                                Показать реквизиты
                            </label>
                            <div className="requisites-block">
                                <RequisitesList requisites={userInfo.requisites} />
                                <label className="hide-requisites text_blue_yes" htmlFor="show-hide-requisites">Скрыть реквизиты</label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="headline__image">
                    <img className="logo__image" src={logo} alt="logo"/>
                </div>
            </section>
        );
    }
}

export default MainInfo;