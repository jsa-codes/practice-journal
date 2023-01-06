import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/PracticeJournal.jpg'
import './NavBar.css'


export const StudentNav = () => {

    const navigate = useNavigate()

    return (
        <>
            <ul className="navbar">
                <li className="navbar__item">
                    <a href="/journalEntryForm"><img src={Logo} alt="guitar" width={"175px"} /></a>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/instructors">My Instructor</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/journalEntries">Journal Entries</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/journalEntryForm">New Entry</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/comments">Comments</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/students/studentId">Profile</Link>
                </li>

                {
                    (localStorage.getItem("pj_token") !== null) ?
                        <li className="nav-item">
                            <button className="btn-logout nav-link"
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
