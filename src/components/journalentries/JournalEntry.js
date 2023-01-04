import './JournalEntry.css'
import { useNavigate } from 'react-router-dom'

export const JournalEntry = ({ id, description, date, time, hoursSlept, water, nutrition, mood, sessionLength }) => {

  const navigate = useNavigate()

  return (
    <section className='journalEntry__section' key={`journalEntry--${id}`}>
      <div className='card'>
        <div className="journalEntry">
          <h4>Date: {date}</h4>
          <h4>Time: {time}</h4>
          <p>Description: {description}</p>
          <button className='button-52'
            onClick={() => navigate(`/journalEntries/${id}/details`)}
          >View</button>
        </div>
      </div>
    </section>
  )
}


