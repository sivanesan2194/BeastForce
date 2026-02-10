import { useState } from "react";
import style from "./SearchDelete.module.css";
import { FaSearch, FaArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Messagebox } from "./Messagebox";
import { useLocation } from "react-router-dom";

export const SearchDelete = ({
    selectedCount,
    totalCount,
    onSelectAll,
    onDelete,
    handleTrashClick, handleDownload, handleDeletebtn, handleCancel, showDownload, showDeleteDialog, showDownloadDialog, isDelete, searchText, setSearchText,
}) => {

    const location = useLocation();
    // console.log(location);

    const isViewRegister = location.pathname.includes("viewregister");
    const isPaymentHistory = location.pathname.includes("paymenthistory");
    return (
        <>
            {showDeleteDialog && <Messagebox onConfirm={handleDeletebtn} onCancel={handleCancel} onText="Are you sure want to delete ?" />}
            {showDownloadDialog && <Messagebox onConfirm={handleDownload} onCancel={handleCancel} onText="Are you sure want to download ?" />}


            <div className={style.container}>

                {/* HEADER */}
                <div className={style.header}>
                    <p>{isViewRegister && "View Registered"} {isPaymentHistory && "Payment History"}</p>

                    <div className={style.search}>
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                </div>

                {/* ACTION BAR */}
                {isViewRegister && <div className={style.delete}>

                    {/* SELECT ALL */}
                    {isDelete && <input
                        type="checkbox"
                        checked={selectedCount === totalCount && totalCount > 0}
                        onChange={onSelectAll}
                    />}

                    {/* DELETE */}
                    <button
                        disabled={isDelete && selectedCount === 0}
                        onClick={handleTrashClick}
                    >
                        <MdDelete className={style.deletebtn} />
                    </button>

                    {/* DOWNLOAD */}
                    <button onClick={showDownload}>
                        <FaArrowDown />
                    </button>

                </div>}
            </div>
        </>
    );
};
