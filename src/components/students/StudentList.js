import { useEffect, useState } from 'react'
import { getAllStudents } from '../managers/StudentManager'
import { Student } from './Student'


export const StudentList = () => {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            getAllStudents()
                .then(studentArray => {
                    setStudents(studentArray);
                })
        },
        []
    )

    return <>
        <h2>Current Students</h2>

        <div className='students'>
            {
                students.map(student =>
                    <Student key={`student--${student.id}`}
                        id={student.id}
                        full_name={student.full_name}
                        age={student.age}
                        style={student.style}
                    />)
            }

        </div>
    </>
}