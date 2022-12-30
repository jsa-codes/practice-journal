import { Link, useNavigate } from 'react-router-dom'

export const InstructorNav = () => {
    const navigate = useNavigate()

    return (
        <ul>
            {
                <li>
                    <Link to="/students">Students</Link>
                </li>
            }
            {
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            }
            {
                <li>
                    <Link to="/comments">New Comments</Link>
                </li>
            }
            {
                localStorage.getItem("pj_token")
                    ? <li>
                        <Link to="" onClick={() => {
                            localStorage.removeItem("pj_token")
                            navigate("/", { replace: true })
                        }}>Log Out</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}