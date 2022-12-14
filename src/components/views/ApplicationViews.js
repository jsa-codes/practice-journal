import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { RegisterInstructor } from '../auth/RegisterInstructor'
import { RegisterStudent } from '../auth/RegisterStudent'
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
  return <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register-instructor" element={<RegisterInstructor />} />
      <Route path="/register-student" element={<RegisterStudent />} />
      <Route element={<Authorized />} />
    </Routes>
  </>
}