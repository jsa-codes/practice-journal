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
          localStorage.setItem("pj_token", res.token)
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
        <div>Username or password was not valid.</div>
        <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
      </dialog>
      <section>
        <form className="form--login" onSubmit={handleLogin}>
          <h1>Practice Journal</h1>
          <h2>Please sign in</h2>
          <div>Music is a journey. So, why not start treating it like one?</div>

          <fieldset>
            <label htmlFor="inputEmail"> Email</label>
            <input ref={username} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
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
        <Link to="/register-student">Create Your Student Profile</Link>
      </section>
      <section className="link--register">
        <Link to="/register-instructor">Create an Instructor Profile</Link>
      </section>
    </main>
  )
}