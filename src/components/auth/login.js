import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../managers/AuthManager"
import "./Login.css"


export const Login = () => {

  // const [email, set] = useState()

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
      <section >
        <form className="form--login" onSubmit={handleLogin}>
          <h1 className='form--header'>Practice Journal</h1>
          <h2>Please sign in</h2>
          <h3>Music is a journey. So, why not start treating it like one?</h3>

          <fieldset className='form--fieldset'>
            <label htmlFor="inputUsername"></label>
            <input ref={username} type="username" id="username" className="form-control" placeholder="username" required autoFocus />
          </fieldset>
          <fieldset className='form--fieldset'>
            <label htmlFor="inputPassword"></label>
            <input ref={password} type="password" id="password" className="form-control" placeholder="password" required />
          </fieldset>
          <fieldset className='form--fieldset'>
            <button className="button-52" type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section className="link--registerstudent">
        <div>Not a Member yet?</div>
        <Link className="register--link" to="/registerstudent">Create Your Student Profile</Link>
      </section>
      <section className="link--registerinstructor">
        <Link className="register--link" to="/registerinstructor">Create an Instructor Profile</Link>
      </section>
    </main>
  )
}