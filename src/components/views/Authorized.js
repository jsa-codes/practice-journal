import { Navigate, Outlet } from "react-router-dom"

export const Authorized = ({ token }) => {
  if (localStorage.getItem("pj_token")) {
    return <Outlet />
  }
  return <Navigate to='/login' replace />
}