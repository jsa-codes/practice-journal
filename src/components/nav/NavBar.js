import React from "react"
import "./NavBar.css"
import { Link, useNavigate } from 'react-router-dom'
import Logo from "./PracticeJournal.png"


export const NavBar = () => {

  const navigate = useNavigate()
  return (
    <>

      <ul className="navbar">

        <li className="navbar__item">
          <a href="/home"><img src={Logo} alt="guitar" width={"120px"} /></a>
        </li>
        <li className="navbar__item">
          <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="navbar__item">
          <Link className="nav-link" to="/">Dashboard</Link>
        </li>
        <li className="navbar__item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>



        {
          (localStorage.getItem("pj_token") !== null) ?
            <li className="nav-item">
              <button className="button-52 nav-link"
                onClick={() => {
                  localStorage.removeItem("pj_token")
                  navigate('/login')
                }}
              >Logout</button>
            </li> : ""

        }
      </ul>

    </>
  )


}


