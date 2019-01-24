import React from 'react';
import './info_about_company.css';

class InfoAboutCompany extends React.Component {
    render() {
        return (
            <section class="main-content__company-content">
                <input type="checkbox" class="show-hide-option" id="show-hide-option" name="show-hide-info"/>
                <h2 class="company-content__headline">О компании Индивидуальный предприниматель Швецова Мария Валерьевна</h2>
                <ul class="company-content__photocards">
                    <li class="list-item photocard photocard-1">
                        <figure class="photocard__image-area">
                            <img class="photocard-image photocard-image-1" src="images/pay/image1.jpg"/>
                            <figcaption class="photocard-image__description">
                                <div class="photocard-name text_bold_yes">Пляж "Карон"</div>
                                <div class="photocard-additional-info text_grey_yes">Какая-то цена</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="list-item photocard photocard-2">
                        <figure class="photocard__image-area">
                            <img class="photocard-image photocard-image-2" src="images/pay/image2.jpg"/>
                            <figcaption class="photocard-image__description">
                                <div class="photocard-name text_bold_yes">Пляж "Карон"</div>
                                <div class="photocard-additional-info text_grey_yes">Какая-то цена</div>
                            </figcaption>
                        </figure>
                    </li>
                    <li class="list-item photocard photocard-3">
                        <figure class="photocard__image-area">
                            <img class="photocard-image photocard-image-3" src="images/pay/image3.jpg"/>
                            <figcaption class="photocard-image__description">
                                <div class="photocard-name text_bold_yes">Пляж "Карон"</div>
                                <div class="photocard-additional-info text_grey_yes">Какая-то цена</div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
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
