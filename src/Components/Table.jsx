import React, { useState } from 'react';
import style from "./Table.module.css";
import profile from "../assets/profile.jpg"
import { useLocation, useNavigate } from 'react-router-dom';

export const Table = ({ triggerRenewal, tableData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  if(!Array.isArray(tableData) || tableData.length === 0){
    return (
      <>
        <div className={style.wrapper}>
          <p>No Users Found</p>
        </div>
      </>
    )
  }
  return (
    <>
      <div className={style.datatable}>
        <table>
          <thead>
            <tr>
              <th>S No</th>
              <th>Profile</th>
              <th>Name</th>
              {(location.pathname === "/content/viewregister") && <th>Age</th>}
              {(location.pathname === "/content/viewregister") && <th>Gender</th>}
              <th>Phone no</th>
              {(location.pathname === "/content/viewregister") && <th>City</th>}
              <th>joining Date</th>
              {(location.pathname === "/content/viewregister") && <th>Duration</th>}
              {(location.pathname === "/content/viewregister") && <th>Expired till</th>}
              {(location.pathname === "/content/paymenthistory") && <th>Fees</th>}
              <th>Expired</th>
              {(location.pathname === "/content/paymenthistory") && <th>Payment Method</th>}  
              {(location.pathname === "/content/dashboard") && <th>Renewal</th>}
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="11">No records found</td>
              </tr>
            ) : (
              tableData.map((row, index) => (
                <tr key={row.id} onClick={()=>{(location.pathname == "/content/viewregister") && navigate(`/content/viewregister/${row.id}`)}}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={row.profile} alt="Profile" />
                  </td>
                  <td>{row.name}</td>
                  {(location.pathname === "/content/viewregister") && <td>{row.age}</td>}
                  {(location.pathname === "/content/viewregister") && <td>{row.gender}</td>}
                  <td>{row.phone_no}</td>
                  {(location.pathname === "/content/viewregister") && <td>{row.city}</td>}
                  <td>{row.joining_date}</td>
                  {(location.pathname === "/content/viewregister") && <td>{row.duration}</td>}
                  {(location.pathname === "/content/viewregister") && <td>{row.expired_till}</td>}
                  {(location.pathname === "/content/paymenthistory") && <td>{row.fees}</td>}
                  <td>{row.expired_date}</td>
                  {(location.pathname === "/content/paymenthistory") && <td>{row.payment_method}</td>}
                  {(location.pathname === "/content/dashboard") && <td onClick={()=>{triggerRenewal(row)}}>Renewal</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
