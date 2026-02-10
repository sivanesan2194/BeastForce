import React, { useState } from 'react';
import style from "./Content.module.css";
import { NavBar } from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';
import { Outlet } from 'react-router-dom';

export const Content = () => {
  const [sidebarOpen,setSidebarOpen]=useState(false);
  const toggleSidebar=()=>{
    setSidebarOpen((previous) => !previous);
  }
  return (
    <>
      <div className={style.navbar}><NavBar toggleSidebar={toggleSidebar}/></div>
      <div className={style.container}>
        <div className={style.asidebar}><SideBar isVisible={sidebarOpen}/></div>
        <div className={style.content}>
          <Outlet/>
        </div>
      </div>
    </>
  )
}
