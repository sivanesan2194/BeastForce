import React from 'react'
import style from "./Home.module.css";
import { CompanyLogo } from '../Components/CompanyLogo';
import { NavBar } from '../Components/NavBar';
import { ContactIco } from '../Components/ContactIco';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';

export const Home = () => {
    const navigate=useNavigate();
    const ContactIcons=[{tag:FaFacebook},{tag:FaGoogle},{tag:FaInstagram},{tag:FaWhatsapp}];
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.Herosection}>
                    <section className={style.navbar}>
                        <CompanyLogo />
                    </section>
                    <section className={style.herocontent}>
                        <h1>Get Ready</h1>
                        <p className={style.subtitle}>Shape your body</p>
                        <p className={style.quote}>
                            "The harder you work and the more prepared you are for something, you're going to be able to persevere through anything."
                        </p>
                        <button className={style.btn} onClick={()=>{navigate("/login")}}>Get Started</button>
                    </section>
                    <section className={style.contact}>
                        {ContactIcons.map((val,i)=>(
                            <ContactIco key={i} tagname={val.tag}/>
                        ))}
                    </section>
                </div>
            </div>
        </>
    )
}
