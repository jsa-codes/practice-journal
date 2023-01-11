import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllJournalEntries } from '../managers/JournalEntryManager'
import './JournalEntriesByStudent.css'

export const JournalEntriesByStudent = () => {

    const { studentId } = useParams()

    const [journalEntries, setJournalEntries] = useState([]);

    useEffect(
        () => {
            getAllJournalEntries()
                .then(response => setJournalEntries(response))
        }, [])

    const filteredJournalEntries = journalEntries.filter(entry => entry.student.id === parseInt(studentId))

    return (
        <>

            {
                filteredJournalEntries.map(entry => {
                    return (
                        <div className='entries'>
                            <section className="entryByStudent__section" key={`journalEntry--${entry.id}`}>
                                <div className='card'>
                                    <h3>Date of Entry:</h3>
                                    {entry.date}
                                    <h3>Time of Entry:</h3>
                                    {entry.time}
                                    <h3>Hours Slept:</h3>
                                    {entry.hours_slept}
                                    <h3>Glasses of Water:</h3>
                                    {entry.water}
                                    <h3>Mood:</h3>
                                    {entry.mood}
                                    <h3>Nutrition:</h3>
                                    {entry.nutrition}
                                    <h3>Length of Practice Session:</h3>
                                    {entry.session_length} minutes
                                    <h3>Description:</h3>
                                    {entry.description}
                                </div>
                            </section>
                        </div>
                    )
                }

                )

            }
        </>
    )
}