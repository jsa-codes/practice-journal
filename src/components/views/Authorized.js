import { Navigate, Outlet } from "react-router-dom"
import { InstructorView } from './InstructorView'
import { StudentView } from './StudentView'

export const Authorized = () => {

  const pjInstructor = localStorage.getItem('instructor')
  const instructor = JSON.parse(pjInstructor)

  // IF the user is authenticated AND is also an instructor then display Instructor View
  if (localStorage.getItem("pj_token") && instructor) {
    return <><Outlet /><InstructorView /></>
  }
  // IF the user is authenticated AND is also a student then display Student View
  else if (localStorage.getItem("pj_token") && !instructor) {
    return <><Outlet /><StudentView /></>

  }
  return <Navigate to='/login' replace />
}