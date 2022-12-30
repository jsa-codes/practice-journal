import { useNavigate } from "react-router-dom"

export const LandingPage = () => {
    const navigate = useNavigate()


    return (
        <>
            <h1>Practice Journal</h1>
            <div className="landingPage">
                <button className="button" onClick={() => navigate("/")}>Instructors</button>
                <button className="button" onClick={() => navigate("/")}>Students</button>
            </div>
        </>
    )
}