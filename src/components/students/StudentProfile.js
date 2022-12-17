import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStudentById } from '../managers/StudentManager'

export const StudentProfile = () => {

    const { studentId } = useParams()
    const [student, setStudent] = useState({})

    useEffect(
        () => {
            getStudentById(studentId)
                .then(setStudent)
        },
        [studentId]
    )



    return <section className='studentProfile' key={student.id}>
        <header className='studentProfile--name'>{student?.full_name}</header>
        <div className='studentProfile--age'>Age: {student.age}</div>
        <div className='studentProfile--guitarType'>Guitar: {student.guitartype}</div>
        <div className='studentProfile--yearsPlaying'>Years Playing: {student.years_playing}</div>
        <div className='studentProfile--style'>Style: {student.style}</div>
        <div className='studentProfile--email'>Email: {student.email}</div>

    </section>

}