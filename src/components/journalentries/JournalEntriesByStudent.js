import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllJournalEntries } from '../managers/JournalEntryManager'
import {  getStudentById } from '../managers/StudentManager'

export const JournalEntriesByStudent = () => {

    const { studentId } = useParams()

    const [student, setStudent] = useState({});
    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(
        () => {
            getStudentById(studentId)
                .then(student => {
                    setStudent(student);
                })
        },
        [studentId]
    )

    useEffect(
        () => {
            getAllJournalEntries()
                .then(journalEntryArray => {
                    setJournalEntries(journalEntryArray)
                })
        }, [])


    return (

        <div>
            {
                journalEntries.map(entry => {
                    return <>
                        <div>Journal Entry {entry.id}</div>
                    </>
                })
            }
        </div>

    )

}
