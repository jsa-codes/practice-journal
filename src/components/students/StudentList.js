import { useEffect, useState } from 'react'
import { getAllStudents } from '../managers/StudentManager'
import { Link } from 'react-router-dom'



export const StudentList = () => {

    const [students, setStudents] = useState([])

    useEffect(
        () => {
            getAllStudents()
                .then(studentArray => setStudents(studentArray))
        },
        []
    )

    return (
        <>


            <div className='students'>
                <h2>Current Students</h2>
                {
                    students.map(student => {
                        return <>
                            <section className="student" key={`student--${student.id}`}>
                                <div>
                                    <Link to={`/students/${student.id}/details`}>Name: {student.full_name}</Link>
                                </div>
                                <div>Age:{student.age}</div>

                            </section>

                        </>
                    })
                }

            </div>
        </>)
}