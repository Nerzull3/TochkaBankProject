import React from 'react';

export default function PhotocardsList({ photocards }) {
    const result = Object.keys(photocards).map((photocard, index) =>
        <li className={`list-item photocard photocard-${index + 1}`}>
            <figure className="photocard__image-area">
                <img className={`photocard-image photocard-image-${index + 1}`} src={photocards[photocard].source} alt="товар"/>
                <figcaption className="photocard-image__description">
                    <div className="photocard-name text_bold_yes">{photocards[photocard].description}</div>
                    <div className="photocard-additional-info text_grey_yes">{photocards[photocard].price}</div>
                </figcaption>
            </figure>
        </li>
    );

    return <ul className="company-content__photocards">{result}</ul>;
}