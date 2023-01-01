import { useEffect, useState } from 'react'
import { getInstructors } from '../managers/InstructorManager'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser } from '../managers/UserManager';
import "./SelectInstructor.css"

export const SelectInstructor = () => {


    const navigate = useNavigate();

    const [instructors, setInstructors] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(
        () => {
            getInstructors()
                .then(instructorArray => setInstructors(instructorArray))
        },
        []
    )

    useEffect(
        () => {
            getCurrentUser()
                .then(currentUser => setCurrentUser(currentUser))
        },
        []
    )


    const handleSaveButtonClick = (event, instructor) => {
        event.preventDefault()



        const updatedStudent = {
            id: currentUser.id,
            instructorId: instructor.id,
            age: currentUser.age,
            style: currentUser.style,
            yearsPlaying: currentUser.yearsPlaying,
        }

        fetch(`http://localhost:8000/students/${currentUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("pj_token")}`

            },
            body: JSON.stringify(updatedStudent)
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/");
            });
    }


    return <>
        <h2>Please Select Your Instructor</h2>

        <div className='instructors'>
            {
                instructors.map(instructor => {
                    return <section className='instructor__section' key={`instructor--${instructor.id}`}>
                        <div className='card'>

                            <img className="thumbnail" src="https://images.equipboard.com/uploads/user/image/3382/big_jimi-hendrix.jpg" alt="" />
                            <div>
                                <h4>Name: {instructor.full_name}</h4>
                                <p>Location: {instructor.location}</p>
                                <p>Bio: {instructor.bio}</p>
                                <button className='button-52'
                                    onClick={(event) => handleSaveButtonClick(event, instructor)}
                                >Select This Instructor</button>

                            </div>
                        </div>
                    </section>
                }
                )
            }

        </div>
    </>
}