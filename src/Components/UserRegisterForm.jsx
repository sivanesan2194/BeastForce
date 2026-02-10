import React, { useEffect, useState } from 'react'
import style from "./UserRegisterForm.module.css"
import { FaArrowLeft, FaCamera } from "react-icons/fa6";
import axios from 'axios';
import { data } from 'react-router-dom';


export const UserRegisterForm = ({handleBack}) => {
    const initalState={
        name:"",profile:"no profile Photo", age:"", joining_date: "", phone_no: "",gender:"", city: "",expired_date: "", payment_method: "",coach: "",
    };
    const [formData,setFormData]=useState(initalState);
    const handleChange=(e)=>{
        setFormData((prev)=>({...prev, [e.target.name] : e.target.value}));
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post("http://127.0.0.1:8000/register",formData);
            console.log(response);
            alert("User Registered Successfully");
            setFormData(initalState);
        }
        catch(err){
            console.log(err);
            alert("Registration failed");
        }
    }

  return (
    <>
        <div className={style.viewregister}>
            <div className={style.container}>
                <div className={style.overlay}>
                    <div className={style.header}>
                        <h1>Registeration</h1>
                        <div className={style.backbtn} onClick={handleBack}>
                            <FaArrowLeft/>
                            <button>Back</button>
                        </div>
                    </div>
                    <div className={style.ipform}>
                        <div className={style.ipgroup}>
                            <form className={style.formbox} id="regForm" onSubmit={handleSubmit}>
                                <div className={style.ipgrid}>
                                    <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required/>
                                </div>
                                <div className={style.ipgrid}>
                                    <input type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange} required/>
                                </div>
                                <div className={style.ipgrid}>
                                    <select className={style.selectInput} name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="" disabled>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className={style.ipgrid}>
                                    <input type="date" placeholder="Joining Date" name="joining_date" value={formData.joining_date} onChange={handleChange} required/>
                                </div>
                                <div className={style.ipgrid}>
                                    <input type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} required/>
                                </div>
                                <div className={style.ipgrid}>
                                    <input type="number" placeholder="Contact Number" maxLength="10" name="phone_no" value={formData.phone_no} onChange={handleChange} required/>
                                </div>
                                <div className={style.ipgrid}>
                                    <input type="date" placeholder="MemberShip Date" name="expired_date" value={formData.expired_date} onChange={handleChange} required/>
                                </div>
                                <div className={style.radioBox}>
                                    <label><input type="radio" name="coach" value="Trainer" checked={formData.coach === "Trainer"} onChange={handleChange} required/> Trainer</label>
                                    <label><input type="radio" name="coach" value="Personal Trainer" checked={formData.coach === "Personal Trainer"} onChange={handleChange} required/> Personal Trainer</label>
                                </div>
                                <div className={style.ipgrid}>
                                    <select className={style.selectInput} name="payment_method" value={formData.payment_method} onChange={handleChange} required>
                                        <option value="" disabled>Payment Method</option>
                                        <option value="cash">Cash</option>
                                        <option value="UPI">UPI</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className={style.photobox}>
                            <div className={style.cameraFrame}>
                                <FaCamera className={style.cameraIcon}/>
                            </div>
                            <button className={style.photoBtn}>Upload Photo</button>
                            <button className={style.photoBtn} form="regForm">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
