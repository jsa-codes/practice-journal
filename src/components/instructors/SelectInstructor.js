import { useEffect, useState } from 'react'
import { getInstructors } from '../managers/InstructorManager'
import { useNavigate, useParams } from 'react-router-dom'
import "./SelectInstructor.css"
import { getStudentById } from '../managers/StudentManager';

export const SelectInstructor = () => {

    const { studentId } = useParams()

    const navigate = useNavigate();

    const [instructors, setInstructors] = useState([])
    const [student, setStudent] = useState({})

    useEffect(
        () => {
            getInstructors()
                .then(instructorArray => setInstructors(instructorArray))
        },
        []
    )
    console.log(instructors)

    useEffect(
        () => {
            getStudentById(studentId)
                .then(student => setStudent(student))
        },
        [studentId]
    )

    console.log(studentId);


    const handleSaveButtonClick = (event, instructor) => {
        event.preventDefault()



        const updatedStudent = {
            id: student.id,
            instructor_id: instructor.id,
            age: student.age,
            style: student.style,
            years_playing: student.years_playing,
        }

        fetch(`http://localhost:8000/students/${student.id}`, {
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
                            <div className='profile'>
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