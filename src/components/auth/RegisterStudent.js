import React, { useRef } from "react"
import { Link, useNavigate, useState } from "react-router-dom"
import { registerUser } from "../managers/AuthManager"
import "./Auth.css"

export const RegisterStudent = () => {


    const firstName = useRef()
    const lastName = useRef()
    const age = useRef()
    const yearsPlaying = useRef()
    const style = useRef()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newStudent = {
                "account_type": "student",
                "username": username.current.value,
                "is_staff": false,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "age": age.current.value,
                "years_playing": yearsPlaying.current.value,
                "style": style.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            registerUser(newStudent)
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
                <h1 className="h3 mb-3 font-weight-normal">Create a Student Profile</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Age </label>
                    <input ref={age} type="text" name="age" className="form-control" placeholder="Age" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="yearsPlaying"> Years Playing </label>
                    <input ref={yearsPlaying} type="text" name="yearsPlaying" className="form-control" placeholder="How Many Years Have You Been Playing?" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="yearsPlaying"> Style </label>
                    <input ref={style} type="text" name="style" className="form-control" placeholder="What Style Do You Play?" required autoFocus />
                </fieldset>

                <fieldset>
                    <label htmlFor="inputUsername">Username</label>
                    <input ref={username} type="text" name="username" className="form-control" placeholder="Your email is your username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required autoFocus />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>

                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register as a Student</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}