import React, { useState } from 'react';
import style from "./ResetPwdCard.module.css";
import { CardCompanyLogo } from './CardCompanyLogo';
import { FaLock } from "react-icons/fa";

export const ResetPwdCard = ({setActiveCard}) => {
    const inputDefault=[{password:"",confirmPwd:""}];
    const[ipval,setIpval]=useState(inputDefault);
    const inputAttri=[
        {type:"password",placeholder:"Enter New Password",value:"password",Icon:FaLock},
        {type:"password",placeholder:"Confirm Password",value:"confirmPwd",Icon:FaLock},
    ];
  return (
    <>
        <div className={style.container}>
            <CardCompanyLogo/>
            <h1>Reset Password</h1>
            <p>Enter your New Password below,<br/>we are just being extra safe</p>
            <div className={style.inputbox}>
                {inputAttri.map((val,i)=>{
                    const Icon=val.Icon;
                    return(
                        <div className={style.inputWrapper} key={i}>
                            <Icon className={style.icon}/>
                            <input type={val.type} value={ipval[val.value]} placeholder={val.placeholder} required />
                        </div>
                    )
                })}
            </div>
            <div className={style.savebtn}>
                <button onClick={()=>{setActiveCard("login")}}>Save</button>
            </div>
        </div>
    </>
  )
}
