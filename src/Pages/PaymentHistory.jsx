import React, { useEffect } from 'react'
import style from "./PaymentHistory.module.css"
import { useState } from 'react'
import { SearchDelete } from '../Components/SearchDelete'
import { Table } from '../Components/Table'
import { Outlet } from 'react-router-dom'
import axios from 'axios'


export const PaymentHistory = () => {
    const [searchText, setSearchText] = useState("");
    const [tableData, setTableData] = useState([]);

    const get_data_api = async () => {
        const user_data = await axios.get("http://127.0.0.1:8000/users");
        setTableData(user_data.data.Data);
        // console.log(user_data.data.Data);
    }
    useEffect(() => {
        get_data_api();
    }, []);

    const filteredData = tableData.filter((row) => row.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <div className={style.Paymenthistory}>
                <div className={style.container}>
                    <SearchDelete searchText={searchText} setSearchText={setSearchText} />
                    <Table tableData={filteredData} />
                </div>
            </div>
        </>
    )
}
