import { useEffect, useState } from 'react'
import { getStudents } from '../managers/StudentManager'
import { Link } from 'react-router-dom'


export const StudentList = () => {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            getStudents()
                .then(setStudents)
        },
        []
    )

    return <>
        <h2>Students</h2>

        <div className='students'>
            {
                students.map((student) => {
                    return <ul>
                        <div className='student' key={student.id}>
                            <Link to={`/students/${student.id}`}>{student.fullName}</Link>
                        </div>
                    </ul>
                }
                )
            }

        </div>
    </>
}