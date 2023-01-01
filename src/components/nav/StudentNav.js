import { Link, useNavigate } from 'react-router-dom'

export const StudentNav = () => {

    const navigate = useNavigate()

    return (
        <>
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/instructor/:instructorId">My Instructor</Link>
                </li>
                <li className="navbar__item">
                    <Link className="nav-link" to="/myJournalEntries">My Journal Entries</Link>
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
                            <button className="button-3 nav-link"
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
