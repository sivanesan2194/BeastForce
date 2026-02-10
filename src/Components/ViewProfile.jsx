import React, { useEffect, useState } from 'react'
import style from "./ViewProfile.module.css"
import { FaArrowLeft } from 'react-icons/fa'
import profile from "../assets/profile.jpg"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const ViewProfile = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [isEdit,setIsEdit]=useState(false);

    const [userDetails,setUserDetails]=useState(null);
    const fetchUser=async()=>{
        const user_data = await axios.get(`http://127.0.0.1:8000/users/${id}`);
        setUserDetails(user_data.data.Data);
    }
    useEffect(()=>{
        fetchUser();
    },[id]);
    const handleChange=(e)=>{
        setUserDetails((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSave=async()=>{
        try{
        const response = await axios.put(`http://127.0.0.1:8000/users/${id}`,userDetails);
        alert("Profile Updated Successfully");
        console.log(response);
        setIsEdit(false);
        }
        catch(err){
            console.log(err);
            alert("Failed to Update Profile");
        }
    }
    if (!userDetails) {
        return <p>Loading...</p>;
    }

  return (
    <>
        <div className={style.viewcard}>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.header}>
                        <p>View Register</p>
                        <div className={style.backbtn} onClick={()=>{navigate("/content/viewregister")}}>
                            <FaArrowLeft/>
                            <button>Back</button>
                        </div>
                    </div>
                    <div className={style.profile}>
                        <div className={style.photo}>
                            <img src={userDetails.profile} alt="photo" />
                        </div>
                        {isEdit ? <input className={style.editname} name="name" value={userDetails.name} onChange={handleChange}/>:<h1>{userDetails.name}</h1>}
                    </div>
                    <div className={style.content1}>
                        <div className={style.agebox}>
                            <p className={style.title}>Age</p>
                            {isEdit ? <input className={style.editname} name="age" value={userDetails.age} onChange={handleChange}/>:<p>{userDetails.age}</p>}
                        </div>
                        <span></span>
                        <div className={style.genderbox}>
                            <p className={style.title}>Gender</p>
                            {isEdit ? (
                                <select name="gender" value={userDetails.gender} onChange={handleChange}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            ) : <p>{userDetails.gender}</p>}
                        </div>
                        <span></span>
                        <div className={style.contactbox}>
                            <p className={style.title}>Contact Number</p>
                            {isEdit ? <input className={style.editname} name="phone_no" value={userDetails.phone_no} onChange={handleChange}/>:<p>{userDetails.phone_no}</p>}
                        </div>
                        <span></span>
                        <div className={style.citybox}>
                            <p className={style.title}>City</p>
                            {isEdit ? <input className={style.editname} name="city" value={userDetails.city} onChange={handleChange}/>:<p>{userDetails.city}</p>}
                        </div>
                    </div>
                    <div className={style.content2}>
                        <div className={style.durationbox}>
                            <p className={style.title}>Duration</p>
                            {isEdit ? <input className={style.editname} name="duration" value={userDetails.duration} onChange={handleChange}/>:<p>{userDetails.duration}</p>}
                        </div>
                        <div className={style.jdatebox}>
                            <p className={style.title}>Joining Date</p>
                            {isEdit ? <input type="date" className={style.editname} name="joining_date" value={userDetails.joining_date} onChange={handleChange}/>:<p>{userDetails.joining_date}</p>}
                        </div>
                        <div className={style.expiredbox}>
                            <p className={style.title}>Expired till</p>
                            {isEdit ? <input className={style.editname} name="expired_till" value={userDetails.expired_till} onChange={handleChange}/>:<p>{userDetails.expired_till}</p>}
                        </div>
                        <div className={style.edatebox}>
                            <p className={style.title}>Expired Date</p>
                            {isEdit ? <input type="date" className={style.editname} name="expired_date" value={userDetails.expired_date} onChange={handleChange}/>:<p>{userDetails.expired_date}</p>}
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button onClick={()=>{
                            if(isEdit){
                                handleSave();
                            }
                            else{
                                setIsEdit(true);
                            }}}>{isEdit?"Save":"Edit"}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
