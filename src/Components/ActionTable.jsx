import React from "react";
import style from "./ActionTable.module.css";
import profile from "../assets/profile.jpg";

export const ActionTable = ({ tabledata, selectedIds, onRowSelect }) => {
  return (
    <div className={style.datatable}>
      <table>
        <thead>
          <tr>
            <th>Action</th>
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
            <th>Expired</th>
          </tr>
        </thead>

        <tbody>
          {tabledata.length === 0 ? (
            <tr>
              <td colSpan="11">No records found</td>
            </tr>
          ) : (
            tabledata.map((row, index) => (
              <tr key={row.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(row.id)}
                    onChange={() => onRowSelect(row.id)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>
                  <img src={profile} alt="Profile" />
                </td>
                <td>{row.name}</td>
                {(location.pathname === "/content/viewregister") && <td>{row.age}</td>}
                {(location.pathname === "/content/viewregister") && <td>{row.gender}</td>}
                <td>{row.phone_no}</td>
                {(location.pathname === "/content/viewregister") && <td>{row.city}</td>}
                <td>{row.joining_date}</td>
                {(location.pathname === "/content/viewregister") && <td>{row.duration}</td>}
                {(location.pathname === "/content/viewregister") && <td>{row.expired_till}</td>}
                <td>{row.expired_date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
