import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../managers/AuthManager"
import "./Auth.css"

export const RegisterInstructor = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const age = useRef()
    const yearsPlaying = useRef()
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
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "age": age.current.value,
                "years_playing": yearsPlaying.current.value,
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

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Create an Instructor Profile</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="age"> Age </label>
                    <input ref={age} type="text" name="age" className="form-control" placeholder="Age" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="yearsPlaying"> Years Playing </label>
                    <input ref={yearsPlaying} type="number" name="yearsPlaying" className="form-control" placeholder="Years Playing" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="bio"> Bio </label>
                    <input ref={bio} type="text" name="bio" className="form-control" placeholder="Bio" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="location"> Location </label>
                    <input ref={location} type="text" name="location" className="form-control" placeholder="Location" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>

                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register as an Instructor</button>
                </fieldset>
            </form>
            <section className="link--login">
                Already registered? <Link to="/login">Login</Link>
            </section>
            <section className="link--registerstudent">
                Not an Instructor? Students Register here <Link to="/registerstudent">Student Registration</Link>
            </section>
        </main>
    )
}