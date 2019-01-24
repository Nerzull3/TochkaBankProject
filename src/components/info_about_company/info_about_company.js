import React from 'react';
import './info_about_company.css';
import PhotocardsList from './photocardsList';
import photocards from '../database/photocards';

class InfoAboutCompany extends React.Component {
    render() {
        return (
            <section class="main-content__company-content">
                <input type="checkbox" class="show-hide-option" id="show-hide-option" name="show-hide-info"/>
                <h2 class="company-content__headline">О компании Индивидуальный предприниматель Швецова Мария Валерьевна</h2>
                <PhotocardsList photocards={photocards}/>
                <p class="company-content__additional-description text_bold_yes">
                        <a class="link text_blue_yes" href="#">Испа́ния</a> (исп. и галис. España), официально Короле́вство Испа́ния
                        (исп. и галис. Reino de España МФА [ˈreino ðe esˈpaɲa]) — суверенное государство
                        на юго-западе Европы и частично в Африке, член Европейского союза и НАТО.
                        Испания занимает бо́льшую часть (80 %) Пиренейского полуострова, а также Канарские и
                        Балеарские острова, имеет общую площадь 504 782 км² (вместе с небольшими
                        суверенными территориями на африканском побережье, городами Сеута и Мелилья),
                        являясь четвёртой по величине страной в Европе (после России, Украины и Франции).
                </p>
                <label class="hide-option__label text_blue_yes" for="show-hide-option"><div>Скрыть</div></label>
                <label class="show-option__label text_blue_yes" for="show-hide-option"><div>Показать ещё</div></label>
            </section>
        );
    }
}

export default InfoAboutCompany;
