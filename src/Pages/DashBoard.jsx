import React, { useEffect, useRef, useState } from 'react';
import style from "./DashBoard.module.css";
import { FaUserPlus } from "react-icons/fa";
import { Table } from '../Components/Table';
import { Messagebox } from '../Components/Messagebox';
import { UserRegisterForm } from '../Components/UserRegisterForm';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { RenewalCard } from '../Components/RenewalCard';

export const DashBoard = () => {
  const [tableData, setTableData] = useState([]);
  const [forexpiringbtn, setForexpiringbtn] = useState("Expired");
  const [newRegister, setNewRegister] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [showRenewalCard,setShowRenewalCard] = useState(false);
  const [selectedUser,setSelectedUser] = useState(null);

  const handleRenewal = () => {
    console.log("Renewed!");
    setShowDialog(false);
    setShowRenewalCard(true);
  }
  const handleCancel = () => {
    console.log("Canceled!");
    setShowDialog(false);
  }
  const handleBack = () => {
    setNewRegister(false);
  }
  const handleRenewalConfirm = async(renewalData)=>{
    try{
      const response=await axios.put(`http://127.0.0.1:8000/users/${selectedUser.id}/renew`,renewalData);
      get_data_api(forexpiringbtn);
      setShowRenewalCard(false);
      setSelectedUser(null);
      console.log(response);
    }
    catch(err){
      console.log(err);
    }
  }

  const get_data_api = async (type) => {
    try {
      const url = (type === "Expired") ? "http://127.0.0.1:8000/users/expired" : "http://127.0.0.1:8000/users/expiring"
      const user_data = await axios.get(url);
      setTableData(user_data.data.Data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    get_data_api("Expired");
  }, []);

  useEffect(()=>{
    get_data_api(forexpiringbtn);
  },[forexpiringbtn])
  return (
    <>
      {newRegister && <UserRegisterForm handleBack={handleBack} />}
      <div className={style.dashboard}>
        <div className={style.container}>
          <div className={style.forbtns}>
            <div className={style.btn1}>
              <div className={style.newuser} onClick={() => setNewRegister(true)}>
                <FaUserPlus className={style.userico} />
                <button>New Register</button>
              </div>
            </div>
            <div className={style.btn2}>
              <p className={forexpiringbtn === "Expiring" ? style.expiringbtns : style.expiringbtn} onClick={() => setForexpiringbtn("Expiring")}>Accounts going to expire within 3days</p>
              <p className={forexpiringbtn === "Expired" ? style.expiredbtns : style.expiredbtn} onClick={() => { setForexpiringbtn("Expired") }}>Accounts Expired</p>
            </div>
          </div>
          <div className={style.fortable}>
            <p>{forexpiringbtn === "Expiring" ? "Accounts going to expire within 3days" : "Accounts Expired"}</p>
            <div className={style.tablebox}>
              <Table triggerRenewal={(row) => { setSelectedUser(row);setShowDialog(true) }} tableData={tableData} />
              {showDialog && <Messagebox onConfirm={handleRenewal} onCancel={handleCancel} onText="Are you sure want to Renewal?" />}
              {showRenewalCard && selectedUser && <RenewalCard user={selectedUser} onConfirm={handleRenewalConfirm}/>}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
