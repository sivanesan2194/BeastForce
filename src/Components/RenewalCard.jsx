import React, { useState } from 'react'
import style from "./RenewalCard.module.css"
export const RenewalCard = ({user, onConfirm}) => {
    const initialState = {
        duration: "", joining_date: "", expired_date: ""}
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(formData);
    
    return (
        <>
            <div className={style.dashboard}>
                <div className={style.container}>
                    <div className={style.modalCard}>
                        <div className={style.formGroup}>
                            <label>Duration</label>
                            <select
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>6 Months</option>
                                <option value="1 Month">1 Month</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                                <option value="12 Months">12 Months</option>
                            </select>
                        </div>

                        <div className={style.formGroup}>
                            <label>Joining Date</label>
                            <input
                                type="date"
                                name="joining_date"
                                value={formData.joining_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={style.formGroup}>
                            <label>Expired Date</label>
                            <input
                                type="date"
                                name="expired_date"
                                value={formData.expired_date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={style.actions}>
                            <button className={style.okayBtn} onClick={() => onConfirm(formData)}>
                                Okay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
