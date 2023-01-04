import { Navigate } from "react-router-dom"
import { InstructorViews } from './InstructorViews'
import { StudentViews } from './StudentViews'


export const Authorized = () => {

  /* 
  1) getItem checks for the key "instructor" in localStorage
  2) IF that exists it returns the value of the key "instructor"
  3) Which is either a string representation of true or false
  */
  const isInstructor = JSON.parse(localStorage.getItem("instructor"))


  if (localStorage.getItem("pj_token") && isInstructor) {
    return <>
      <InstructorViews />
    </>


  }
  else if (localStorage.getItem("pj_token") && !isInstructor) {
    return <>
      <StudentViews />
    </>
  }
  return <Navigate to='/login' replace />
}