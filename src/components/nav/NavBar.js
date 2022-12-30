import React from "react"

import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {

  const navigate = useNavigate()
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="navbar__item">
        <Link className="nav-link" to="/home">Home</Link>
      </li>



      {
        (localStorage.getItem("pj_token") !== null) ?
          <li className="nav-item">
            <button className="button-3 nav-link"
              onClick={() => {
                localStorage.removeItem("pj_token")
                navigate('/login')
              }}
            >Logout</button>
          </li> : ""

      }        </ul>
  )

}


