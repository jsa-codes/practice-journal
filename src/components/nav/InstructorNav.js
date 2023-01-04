import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/PracticeJournal.jpg'
import './NavBar.css'


export const InstructorNav = () => {
    const navigate = useNavigate()

    return (
        <>
            <ul className="navbar">
                <li className="navbar__item">
                    <a href="/home"><img src={Logo} alt="guitar" width={"150px"} /></a>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/instructors/:instructorId">Profile</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/students">My Students</Link>
                </li>

                <li className="navbar__item">
                    <Link className="nav-link" to="/comments">Comments</Link>
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