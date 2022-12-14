import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getInstructors } from '../managers/InstructorManager'


export const InstructorList = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(
        () => {
            getInstructors()
                .then(setInstructors)
        },
        []
    )

    return <>
        <h2>Instructors</h2>

        <div className='instructors'>
            {
                instructors.map((instructor) => {
                    return <ul>
                        <div className='instructor' key={instructor.id}>
                            <Link to={`/instructors/${instructor.id}`}>{instructor.fullName}</Link>
                        </div>
                    </ul>
                }
                )
            }

        </div>
    </>
}