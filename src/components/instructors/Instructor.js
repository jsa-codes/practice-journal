import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleInstructor } from '../managers/InstructorManager'

export const Instructor = () => {

    const { instructorId } = useParams()
    const [instructor, setInstructor] = useState({})

    useEffect(
        () => {
            getSingleInstructor(instructorId)
                .then((instructor) => setInstructor(instructor))
        }, [instructor]
    )
    return <></>
}