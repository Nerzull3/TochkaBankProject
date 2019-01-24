import React from 'react';

export default function RequisitesList({ requisites }) {
    return Object.keys(requisites).map(requisite =>
        <p class="requisites-block__requisites requisite-1">
            <span class="requisite-1__name text_grey_yes margin-right_yes">{requisite}:</span>
            <span class="requisite-1__value">{requisites[requisite]}</span>
        </p>
    );
}