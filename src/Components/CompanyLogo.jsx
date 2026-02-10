import React from 'react';
import style from "./CompanyLogo.module.css";

export const CompanyLogo = () => {
  return (
    <>
        <div className={style.company}>
            <div className={style.logo}></div>
            <h1>Beast Forces</h1>
        </div>
    </>
  )
}
