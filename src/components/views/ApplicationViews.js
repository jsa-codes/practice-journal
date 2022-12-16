import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { RegisterInstructor } from '../auth/RegisterInstructor'
import { RegisterStudent } from '../auth/RegisterStudent'
import { StudentProfile } from '../students/StudentProfile'
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
  return <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registerinstructor" element={<RegisterInstructor />} />
      <Route path="/registerstudent" element={<RegisterStudent />} />
      <Route path="/student/:studentId" element={<StudentProfile />} />

      {/* Route for Authenticated Users that are either Students OR Instructors */}
      <Route path="/*" element={<Authorized />} />

    </Routes>
  </>
}