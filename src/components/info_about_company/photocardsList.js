import React from 'react';

export default function PhotocardsList({ photocards }) {
    const result = Object.keys(photocards).map((photocard, index) =>
        <li class={`list-item photocard photocard-${index + 1}`}>
            <figure class="photocard__image-area">
                <img class={`photocard-image photocard-image-${index + 1}`} src={photocards[photocard].source}/>
                <figcaption class="photocard-image__description">
                    <div class="photocard-name text_bold_yes">{photocards[photocard].description}</div>
                    <div class="photocard-additional-info text_grey_yes">{photocards[photocard].price}</div>
                </figcaption>
            </figure>
        </li>
    );

    return <ul class="company-content__photocards">{result}</ul>;
}