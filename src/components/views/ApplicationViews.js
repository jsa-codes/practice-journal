import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { RegisterInstructor } from '../auth/RegisterInstructor'
import { RegisterStudent } from '../auth/RegisterStudent'
import { InstructorList } from '../instructors/InstructorList'
import { InstructorProfile } from '../instructors/InstructorProfile'
import { StudentList } from '../students/StudentList'
import { StudentProfile } from '../students/StudentProfile'
import { Authorized } from "./Authorized"



export const ApplicationViews = () => {
  return <>
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/register-instructor" element={<RegisterInstructor />} />
      <Route path="/register-student" element={<RegisterStudent />} />
      <Route element={<Authorized />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/students/:studentId" element={<StudentProfile />} />
      <Route path="/instructors" element={<InstructorList />} />
      <Route path="/instructors/:instructorId" element={<InstructorProfile />} />
    </Routes>
  </>
}