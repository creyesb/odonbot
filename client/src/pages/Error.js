import React from 'react';
import "./Error.scss";
import imgError from "../assets/svg/404.svg";
export default function Error() {
    return (
        <div className="error-404">
            <h1 className="error-404__txt">Oops aquí no hay nada</h1>
            <img
                className="error-404__img"
                src={imgError}
                alt="logo"

            />

        </div>

    );
}