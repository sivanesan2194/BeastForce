import React from 'react';
import style from "./COntactIco.module.css";

export const ContactIco = ({tagname:Icon}) => {
  return (
    <>
        <div className={style.container}>
            <Icon className={style.ico}/>
        </div>
    </>
  )
}
