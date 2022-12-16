import { Link, useNavigate } from "react-router-dom"
// import Logo from "/Users/jeremymyers/workspace/level-up-CLIENT/level-up-react-CLIENT/src/logo192.png"
// import "./NavBar.css"
export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar has-shadow is-warning mb-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          {/* <img src={Logo} height="3rem" alt="React Logo" /> <h1 className="title is-4 ml-3">Level UP</h1> */}
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" id="burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-end nav-links">
        <div className="navbar-menu is">
          {
            (localStorage.getItem("pj_token") !== null) ?
              <div>
                <ul className="navbar-item">
                  <div className="navbar-item">
                    <ul className="navbar__item">
                      <Link to="/students">Students</Link>
                    </ul>
                  </div>

                </ul>
              </div>
              : <></>
          }
          {
            (localStorage.getItem("pj_token") !== null) ?
              <ul className="navbar-item">
                <button className="nav-link fakeLink is-link"
                  onClick={() => {
                    localStorage.removeItem("pj_token");
                    localStorage.removeItem("is_staff")
                    navigate('/login')
                  }}
                >Logout</button>
              </ul> :
              <>
                {/* <div>
                  <div className="navbar-item">
                    <div className="navbar-item">
                      <ul className="nav-item">
                        <Link className="nav-link is-link" to="/login">Login</Link>
                      </ul>
                    </div>
                    <div className="navbar-item">
                      <ul className="nav-item">
                        <Link className="nav-link is-link" to="/register">Register</Link>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </>
          }
        </div>
      </div>
    </nav >
  )
}