import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../managers/AuthManager"
import "./Auth.css"


export const Login = () => {
  const username = useRef()
  const password = useRef()
  const invalidDialog = useRef()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = {
      username: username.current.value,
      password: password.current.value
    }
    loginUser(user)
      .then(res => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("pj_token", res.token);
          localStorage.setItem("instructor", res.instructor)
          navigate("/")
        }
        else {
          invalidDialog.current.showModal()
        }
      })
  }

  return (
    <main className="container--login">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Email or password was not valid.</div>
        <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Practice Journal</h1>
          <h2>Please sign in</h2>
          <div>Music is a journey. So, why not start treating it like one?</div>

          <fieldset>
            <label htmlFor="inputEmail"> Username</label>
            <input ref={username} type="username" id="username" className="form-control" placeholder="Username" required autoFocus />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
          </fieldset>
          <fieldset style={{
            textAlign: "center"
          }}>
            <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section className="link--register">
        <div>Not a Member yet?</div>
        <Link to="/registerstudent">Create Your Student Profile</Link>
      </section>
      <section className="link--register">
        <Link to="/registerinstructor">Create an Instructor Profile</Link>
      </section>
    </main>
  )
}