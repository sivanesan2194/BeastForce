import React, { useEffect, useState } from 'react';
import style from "./LoginCard.module.css";
import { CardCompanyLogo } from './CardCompanyLogo';
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginCard = ({ setActiveCard }) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const inputDefault = { Email: "", Password: "" };
    const [ipval, setIpval] = useState(inputDefault);
    const inputAttri = [
        { placeholder: "Email", type: "email", value: "Email", Icon: MdEmail },
        { placeholder: "Password", type: "password", value: "Password", Icon: FaLock },
    ];
    const get_user_details = async () => {
        const user_data = await axios.get("http://127.0.0.1:8000/users");
        setUserData(user_data.data.Data);
    }
    useEffect(() => {
        get_user_details();
    }, [])

    const handleChange = (e) => {
        setIpval((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleOnClick = () => {
        const userFound = userData.find((row) => row.name === ipval.Email && row.password === ipval.Password);
        // console.log(userFound);
        
        if (userFound) {
            navigate("/content/dashboard");
        }
        else {
            alert("Invalid Email or Password");
        }
    }
    return (
        <>
            <div className={style.container}>
                <CardCompanyLogo />
                <h1>Login</h1>
                <div className={style.inputbox}>
                    {inputAttri.map((val, i) => {
                        const Icon = val.Icon;
                        return (
                            <div className={style.inputWrapper} key={i}>
                                <Icon className={style.icon} />
                                <input type={val.type} name={val.value} value={ipval[val.value]} placeholder={val.placeholder} onChange={handleChange} required />
                            </div>
                        )
                    })}
                    <button onClick={() => { setActiveCard("forget"); }}>Forgot Password?</button>
                </div>
                <div className={style.loginbtn}>
                    <button onClick={handleOnClick}>Login</button>
                </div>
            </div>
        </>
    )
}
