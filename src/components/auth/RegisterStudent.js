import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../managers/AuthManager"
import "./Register.css"

export const RegisterStudent = () => {


    const first_name = useRef()
    const last_name = useRef()
    const username = useRef()
    const age = useRef()
    const years_playing = useRef()
    const style = useRef()
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
                "is_staff": false,
                "username": username.current.value,
                "first_name": first_name.current.value,
                "last_name": last_name.current.value,
                "age": age.current.value,
                "years_playing": years_playing.current.value,
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
                    <h1 className="form--header">Create a Student Profile</h1>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="first_name"> First Name </label>
                        <input ref={first_name} type="text" name="first_name" className="form-control" placeholder="First name" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="last_name"> Last Name </label>
                        <input ref={last_name} type="text" name="last_name" className="form-control" placeholder="Last name" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="age"> Age </label>
                        <input ref={age} type="text" name="age" className="form-control" placeholder="Age" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="years_playing"> Years Playing </label>
                        <input ref={years_playing} type="text" name="years_playing" className="form-control" placeholder="How Many Years Have You Been Playing?" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="style"> Style </label>
                        <input ref={style} type="text" name="style" className="form-control" placeholder="What Style Do You Play?" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="inputUsername">Username</label>
                        <input ref={username} type="text" name="username" className="form-control" placeholder="Your email is your username" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required autoFocus />
                    </fieldset>
                    <fieldset className='form--fieldset'>
                        <label htmlFor="verifyPassword"> Verify Password </label>
                        <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required autoFocus />
                    </fieldset>
                    <fieldset  className='form--fieldset'>
                        <button className="btn button-52" type="submit">Register as a Student</button>
                    </fieldset>
                </form>
         
            <section className="link--register">
                Not an Student? Instructors Register here <Link to="/registerinstructor">Instructor Registration</Link>
            </section>
        </main>
    )
}