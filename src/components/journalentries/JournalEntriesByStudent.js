import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllJournalEntries } from '../managers/JournalEntryManager'

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
                        <section key={`journalEntry--${entry.id}`}>
                            <h4>Date of Entry:{entry.date}</h4>
                            <h4>Time of Entry:{entry.time}</h4>
                            <h4>Hours Slept:{entry.hours_slept}</h4>
                            <h4>Water:{entry.water}</h4>
                            <h4>Mood:{entry.mood}</h4>
                            <h4>Nutrition:{entry.nutrition}</h4>
                            <h4>Length of Practice Session:{entry.session_length}</h4>
                            <h3>Description:</h3>
                            <h4>{entry.description}</h4>
                        </section>
                    )
                }



                )

            }
        </>
    )
}