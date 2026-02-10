import { SearchDelete } from "../Components/SearchDelete"
import { Table } from "../Components/Table"
import { ActionTable } from "../Components/ActionTable"
import { useEffect, useState } from "react"
import style from "./ViewRegisters.module.css"
import { Outlet } from "react-router-dom"
import axios from "axios"

export const ViewRegister = () => {
    const [searchText, setSearchText] = useState("");
    const [isDelete, setIsDelete] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showDownloadDialog, setShowDownloadDialog] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);
    const [tableData, setTableData] = useState([]);

    const handleTrashClick = () => {
        if (!isDelete) {
            setIsDelete(true);
        }
        else {
            setShowDeleteDialog(true);
        }
    }
    const handleDeletebtn = () => {
        setShowDeleteDialog(false);
        setIsDelete(false);
        console.log("Deleted!");
        handleDelete();
        console.log(selectedIds);
    }
    const handleDownload = () => {
        if (tableData.length === 0) {
            return;
        }
        const headers = Object.keys(tableData[0]).join(",");
        const rows = tableData.map(row => Object.values(row).join(","));
        const csvContent = [headers, ...rows].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "Registered_User.csv";
        a.click();

        window.URL.revokeObjectURL(url);

        setShowDownloadDialog(false);
        console.log("Downloaded !");
    }

    const showDownload = () => setShowDownloadDialog(true);

    const handleCancel = () => {
        setShowDeleteDialog(false);
        setShowDownloadDialog(false);
        console.log("Canceled!");
    }
    // 🔹 Toggle single row
    const handleRowSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    // 🔹 Select All
    const handleSelectAll = () => {
        if (selectedIds.length === tableData.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(tableData.map((row) => row.id));
        }
    };

    // 🔹 Delete Selected
    const handleDelete = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/users/delete", { ids: selectedIds });
            setTableData((prev) =>
                prev.filter((row) => !selectedIds.includes(row.id))
            );
            setSelectedIds([]);
            setShowDeleteDialog(false);
            setIsDelete(false);
        }
        catch (err) {
            console.log(err);
        }
    };

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
            <div className={style.viewregister}>
                <div className={style.container}>
                    <SearchDelete selectedCount={selectedIds.length}
                        totalCount={tableData.length}
                        onSelectAll={handleSelectAll}
                        // onDelete={handleDelete} 
                        handleTrashClick={handleTrashClick}
                        handleCancel={handleCancel}
                        handleDeletebtn={handleDeletebtn}
                        handleDownload={handleDownload}
                        showDownload={showDownload}
                        showDeleteDialog={showDeleteDialog}
                        showDownloadDialog={showDownloadDialog}
                        isDelete={isDelete}
                        searchText={searchText}
                        setSearchText={setSearchText} />
                    {isDelete ? (<ActionTable tabledata={filteredData} selectedIds={selectedIds} onRowSelect={handleRowSelect} />) : (<Table tableData={filteredData} />)}
                </div>
            </div>
        </>
    )
}