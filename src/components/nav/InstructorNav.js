import { Link, useNavigate } from 'react-router-dom'

export const InstructorNav = () => {
    const navigate = useNavigate()

    return (
        <ul>
            {
                <li>
                    <Link to="/students">My Students</Link>
                </li>
            }
            {
                <li>
                    <Link to="/instructors/instructorId">Profile</Link>
                </li>
            }
            {
                <li>
                    <Link to="/comments">Comments</Link>
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