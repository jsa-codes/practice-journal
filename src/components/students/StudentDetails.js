import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { getStudentById } from '../managers/StudentManager';
import './StudentDetails.css'

export const StudentDetails = () => {

    const { studentId } = useParams()

    const [student, setStudent] = useState({});

    useEffect(
        () => {
            getStudentById(studentId)
                .then(student => {
                    setStudent(student);
                })
        },
        []
    )


    return (
        <div className='students'>
            <section className='student__section' key={`student--${student.id}`}>
                <div className='card'>
                    <img className="thumbnail" src="https://images.equipboard.com/uploads/user/image/3382/big_jimi-hendrix.jpg" alt="" />
                    <div className='profile'>
                        <h3>Name: {student.full_name}</h3>
                        <h4>Age: {student.age}</h4>
                        <h4>Style: {student.style}</h4>
                        <Link to="/students/:studentId/journal"
                        >See Journal Entries</Link>
                    </div>
                </div>
            </section>
        </div>
    )

}