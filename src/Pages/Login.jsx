import React, { useState } from 'react';
import style from "./Login.module.css";
import { CardCompanyLogo } from '../Components/CardCompanyLogo';
import { LoginCard } from '../Components/LoginCard';
import { ForgetPasswordCard } from '../Components/ForgetPasswordCard';
import { OtpCard } from '../Components/OtpCard';
import { ResetPwdCard } from '../Components/ResetPwdCard';

export const Login = () => {
  const [activeCard,setActiveCard]=useState("login");
  return (
    <>
        <div className={style.wrapper}>
            <div className={style.Loginsection}>
                <section className={style.card}>
                  { activeCard === "login" && (<LoginCard setActiveCard={setActiveCard}/>) }
                  { activeCard === "forget" && (<ForgetPasswordCard setActiveCard={setActiveCard}/>) }
                  { activeCard === "otp" && (<OtpCard setActiveCard={setActiveCard}/>) }
                  { activeCard === "resetpwd" && (<ResetPwdCard setActiveCard={setActiveCard}/>) }
                </section>
            </div>
        </div>
    </>
  )
}