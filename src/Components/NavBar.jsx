import React from 'react';
import style from "./NavBar.module.css";
import { CompanyLogo } from './CompanyLogo';
import { FaBars } from "react-icons/fa";

export const NavBar = ({toggleSidebar}) => {
  // console.log(toggleSidebar);
  
  return (
    <>
      <nav className={style.navbar}>
        <FaBars onClick={toggleSidebar} className={style.menuicon}/>
        <div className={style.logo}>
          <CompanyLogo />
        </div>
      </nav>
    </>
  )
}
