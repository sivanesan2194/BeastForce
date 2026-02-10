import React from 'react';
import style from "./CardCompanyLogo.module.css";

export const CardCompanyLogo = () => {
    return (
        <>
            <div className={style.logocontainer}>
                <div className={style.logo}></div>
                <div className={style.content}>
                    <h2>Beast Forces</h2>
                    <h2>Gym</h2>
                </div>
            </div>
        </>
    )
}
