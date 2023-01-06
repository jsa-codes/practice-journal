import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getJournalEntryById } from '../managers/JournalEntryManager'
import './JournalEntry.css'

export const JournalEntryDetails = () => {

    const { journalEntryId } = useParams()
    const [journalEntry, setJournalEntry] = useState({})

    const navigate = useNavigate()

    useEffect(
        () => {
            getJournalEntryById(journalEntryId)
                .then(entry => setJournalEntry(entry))
        },
        [journalEntryId]
    )

    console.log(journalEntry)

    return (<>
        <h2>Journal Entry Details</h2>
        <section className='journalEntry__section'>
            <div className='card'>
                <div className="journalEntry">
                    <header className='journalEntry'>Journal Entry {journalEntry.id}</header>
                    <h4>Date: {journalEntry.date}</h4>
                    <h4>Time: {journalEntry.time}</h4>
                    <h4>Hours Slept: {journalEntry.hours_slept}</h4>
                    <h4>Water: {journalEntry.water} glasses</h4>
                    <h4>Nutrition: {journalEntry.nutrition}</h4>
                    <h4>Mood: {journalEntry.mood}</h4>
                    <h4>Description: {journalEntry.description}</h4>
                    <h4>Session Length: {journalEntry.session_length} minutes</h4>
                    <button className='btn-edit'
                        onClick={() => navigate(`/journalEntries/${journalEntry.id}/edit`)}
                    >Edit</button>
                </div>
            </div>
            
        </section>
    </>)

}