import React, { useState } from 'react';
import style from "./OtpCard.module.css";
import { CardCompanyLogo } from './CardCompanyLogo';

export const OtpCard = ({setActiveCard}) => {
    const inputDefault=[{Otp:""}];
    const [ipval,setIpval]=useState(inputDefault);
    const inputAttri=[{type:"number",value:"Otp"}]
  return (
    <>
        <div className={style.container}>
            <CardCompanyLogo/>
            <h1>Enter Your OTP</h1>
            <div className={style.inputbox}>
                {inputAttri.map((val,i)=>(
                    <div className={style.inputWrapper} key={i}>
                        <input type={val.type} value={ipval[val.value]} required />
                    </div>
                ))}
            </div>
            <div className={style.sendOtp}>
                <button onClick={()=>{setActiveCard("resetpwd")}}>Send</button>
            </div>
        </div>
    </>
  )
}
