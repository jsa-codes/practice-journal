import { useEffect, useState } from 'react'
import { getAllStudents } from '../managers/StudentManager'
import { Link } from 'react-router-dom'
import './StudentList.css'



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
                            <section className="student__section" key={`student--${student.id}`}>
                                <h3>
                                    <Link to={`/students/${student.id}/details`}>{student.full_name}</Link>
                                </h3>
                                <h4>Age:{student.age}</h4>

                            </section>

                        </>
                    })
                }

            </div>
        </>)
}