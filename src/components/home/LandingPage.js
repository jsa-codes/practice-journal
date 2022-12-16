import { useNavigate } from "react-router-dom"

export const LandingPage = () => {
    const navigate = useNavigate()


    return (
        <>
            <h1>Practice Journal</h1>
            <div className="landingPage">
                <button className="button" onClick={() => navigate("/instructors")}>Instructors</button>
                <button className="button" onClick={() => navigate("/students")}>Students</button>
            </div>
        </>
    )
}