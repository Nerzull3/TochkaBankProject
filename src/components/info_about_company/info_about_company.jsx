import React from 'react';
import './info_about_company.css';
import PhotocardsList from './photocardsList';
import photocards from '../database/photocards';
import user from '../database/users';

class InfoAboutCompany extends React.Component {
    render() {
        return (
            <section className="main-content__company-content">
                <input type="checkbox" className="show-hide-option" id="show-hide-option" name="show-hide-info"/>
                <h2 className="company-content__headline">О компании {user.name}</h2>
                <PhotocardsList photocards={photocards}/>
                <p className="company-content__additional-description text_bold_yes">
                        <a className="link text_blue_yes" href="https://ru.wikipedia.org/wiki/%D0%98%D1%81%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F">Испа́ния</a> (исп. и галис. España), официально Короле́вство Испа́ния
                        (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство
                        на юго-западе Европы и частично в Африке, член Европейского союза и НАТО.
                        Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и
                        Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими
                        суверенными территориями на африканском побережье, городами Сеута и Мелилья),
                        являясь четвёртой по величине страной в Европе (после России, Украины и Франции).
                </p>
                <label className="hide-option__label text_blue_yes" htmlFor="show-hide-option"><div>Скрыть</div></label>
                <label className="show-option__label text_blue_yes" htmlFor="show-hide-option"><div>Показать ещё</div></label>
            </section>
        );
    }
}

export default InfoAboutCompany;
