import React from 'react';

export default function RequisitesList({ requisites }) {
    return Object.keys(requisites).map(requisite =>
        <p className="requisites-block__requisites requisite-1">
            <span className="requisite-1__name text_grey_yes margin-right_yes">{requisite}:</span>
            <span className="requisite-1__value">{requisites[requisite]}</span>
        </p>
    );
}