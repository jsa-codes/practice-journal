import React from 'react'
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
        <h2>Current Students</h2>

        <div className='students'>
            {
                students.map((student) => {
                    return <div key={student.id}>
                        <div className='student' >
                            <Link to={`/students/${student.id}`}>{student.full_name}</Link>
                        </div>
                    </div>
                }
                )
            }

        </div>
    </>
}