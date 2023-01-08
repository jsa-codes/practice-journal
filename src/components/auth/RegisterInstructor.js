import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../managers/AuthManager"
import "./Auth.css"

export const RegisterInstructor = () => {
    const first_name = useRef()
    const last_name = useRef()
    const username = useRef()
    const age = useRef()
    const years_playing = useRef()
    const location = useRef()
    const bio = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newInstructor = {
                "account_type": "instructor",
                "is_staff": true,
                "username": username.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "age": age.current.value,
                "years_playing": years_playing.current.value,
                "location": location.current.value,
                "bio": bio.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            registerUser(newInstructor)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("pj_token", res.token)
                        navigate("/login")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <section className='form__section'>
                <form className="form--login" onSubmit={handleRegister}>
                    <h1 className="h3 mb-3 font-weight-normal">Create an Instructor Profile</h1>
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input ref={first_name} type="text" name="firstName" className="form-control" placeholder="What's your first name?" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lastame"> Last Name </label>
                        <input ref={last_name} type="text" name="lastName" className="form-control" placeholder="What's your last name?" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="age"> Age </label>
                        <input ref={age} type="text" name="age" className="form-control" placeholder="How old are you?" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="years_nlaying"> Years Playing </label>
                        <input ref={years_playing} type="number" name="yearsPlaying" className="form-control" placeholder="How long have you been playing?" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bio"> Bio </label>
                        <input ref={bio} type="text" name="bio" className="form-control" placeholder="Tell us a little about yourself..." required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="location"> Location </label>
                        <input ref={location} type="text" name="location" className="form-control" placeholder="Where are you located?" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputUsername">Username</label>
                        <input ref={username} type="text" name="username" className="form-control" placeholder="Please create a username" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder="What's your email address?" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" name="password" className="form-control" placeholder="Please create a strong password" required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Please verify your password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn button-52 btn-1 btn-sep icon-send" type="submit">Register as an Instructor</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--login">
                Already registered? <Link to="/login">Login</Link>
            </section>
            <section className="link--registerstudent">
                Not an Instructor? Students Register here <Link to="/registerstudent">Student Registration</Link>
            </section>
        </main>
    )
}