import React, { useState } from 'react';
import style from "./SideBar.module.css";
import { RiDashboardFill } from "react-icons/ri";
import { FaPeopleGroup, FaCoins } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { Messagebox } from './Messagebox';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

export const SideBar = ({isVisible}) => {
  const navigate=useNavigate();
  const location = useLocation();
  // console.log(isVisible);

  const [showDialog,setShowDialog]=useState(false);
      const handleLogout=()=>{
        navigate("/login");
        console.log("Logout!");
        setShowDialog(false);
      }
      const handleCancel=()=>{
        console.log("Canceled!");
        setShowDialog(false);
      }
  return (
    <>
      <aside className={`${style.sidebar} ${isVisible? style.show : style.hide}`}>
        <div className={style.container}>
          <div className={style.navigationcontent}>
            <div className={(location.pathname === "/content/dashboard" || location.pathname === "/content") ? style.navibtns : style.navibtn} onClick={() => {navigate("/content/dashboard")}}>
              <RiDashboardFill className={style.icon} />
              <h1>Dashboard</h1>
            </div>
            <div className={location.pathname === "/content/viewregister" ? style.navibtns : style.navibtn} onClick={() => {navigate("/content/viewregister")}}>
              <FaPeopleGroup className={style.icon} />
              <h1>View Registered</h1>
            </div>
            <div className={location.pathname === "/content/paymenthistory" ? style.navibtns : style.navibtn} onClick={() => {navigate("/content/paymenthistory")}}>
              <FaCoins className={style.icon} />
              <h1>Payment History</h1>
            </div>
          </div>
          <div className={style.logoutcontainer}>
            <div className={style.logoutbtn} onClick={() => {setShowDialog(true)}}>
              <MdLogout className={style.icon} />
              <h1>Logout</h1>
            </div>
              {showDialog && <Messagebox onConfirm={handleLogout} onCancel={handleCancel} onText="Are you sure want to Logout?"/>}
          </div>
        </div>
      </aside>
    </>
  )
}
