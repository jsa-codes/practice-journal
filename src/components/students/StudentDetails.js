import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentById } from '../managers/StudentManager';

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
    console.log(studentId)


    return (
        <section className='student'>
            <header className='student'>Name: {student.full_name}</header>
            <div>Age: {student.age}</div>
            <div>Style: {student.style}</div>
            <div>Years Playing: {student.years_playing}</div>
        </section>
    )

}