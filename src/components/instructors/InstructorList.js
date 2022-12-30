import { useEffect, useState } from 'react'
import { getInstructors } from '../managers/InstructorManager'
import { Instructor } from './Instructor'


export const InstructorList = () => {

    const [instructors, setInstructors] = useState([])

    useEffect(
        () => {
            getInstructors()
                .then(data => setInstructors(data))
        },
        []
    )

    return <>
        <h2>Current Instructors</h2>

        <div className='instructors'>
            {
                instructors.map(instructor => {
                    return <div key={instructor.id}>
                        <Instructor key={`instructor--${instructor.id}`}
                            id={instructor.id}
                            full_name={instructor.full_name}
                            age={instructor.age}
                        />
                    </div>
                }
                )
            }

        </div>
    </>
}