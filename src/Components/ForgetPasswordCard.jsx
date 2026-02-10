import React, { useState } from 'react';
import style from "./ForgetPasswordCard.module.css";
import { CardCompanyLogo } from './CardCompanyLogo';
import { MdEmail } from "react-icons/md";
export const ForgetPasswordCard = ({setActiveCard}) => {
    const inputDefault=[{Email:""}];
    const [ipval,setIpval]=useState(inputDefault);
    const inputAttri=[{placeholder:"Email",type:"email",value:"Email",Icon:MdEmail}];
    return (
        <>
            <div className={style.container}>
                <CardCompanyLogo/>
                <h1>Forget Your Password ?</h1>
                <p>Enter your Email below to receive your OTP</p>
                <div className={style.inputbox}>
                    {inputAttri.map((val,i)=>{
                        const Icon=val.Icon;
                        return(
                            <div className={style.inputWrapper} key={i}>
                                <Icon className={style.icon}/>
                                <input type={val.type} value={ipval[val.value]} placeholder={val.placeholder} required/>
                            </div>
                        )
                    })}
                </div>
                <div className={style.sendbtn}>
                    <button onClick={()=>{setActiveCard("otp")}}>Send</button>
                </div>
            </div>
        </>
    )
}
