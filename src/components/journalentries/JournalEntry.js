import './JournalEntry.css'
import { useNavigate } from 'react-router-dom'
import { deleteJournalEntry } from '../managers/JournalEntryManager'

export const JournalEntry = ({ id, description, date, time, getEntries }) => {

  const navigate = useNavigate()


  return (
    <section className='journalEntry__section' key={`journalEntry--${id}`}>
      <div className='card'>
        <div className="journalEntry">
          <h4>Date: {date}</h4>
          <h4>Time: {time}</h4>
          <p>Description: {description}</p>
          <button className='btn-view'
            onClick={() => navigate(`/journalEntries/${id}/details`)}
          >View</button>
          <button className='btn-delete'
            onClick={() => {
              deleteJournalEntry(id).then(() => {
                getEntries()
              })

            }}
          >Delete</button>
        </div>
      </div>
    </section>
  )
}


