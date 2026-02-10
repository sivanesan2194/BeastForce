import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Content } from '../Pages/Content'
import { DashBoard } from '../Pages/DashBoard'
import { ViewRegister } from '../Pages/ViewRegisters'
import { PaymentHistory } from '../Pages/PaymentHistory'
import {ViewProfile} from "../Components/ViewProfile"
export const MainRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login/>}/>

            <Route path='/content' element={<Content/>}>
                <Route index element={<DashBoard/>}/>
                <Route path='dashboard' element={<DashBoard/>}/>
                <Route path='viewregister' element={<ViewRegister/>}/>
                <Route path='viewregister/:id' element={<ViewProfile/>}/>
                <Route path='paymenthistory' element={<PaymentHistory/>}/>
            </Route>
        </Routes>
    </>
  )
}
