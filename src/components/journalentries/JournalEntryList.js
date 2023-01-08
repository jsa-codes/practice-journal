import { useEffect, useState } from 'react'
import { getAllJournalEntries } from '../managers/JournalEntryManager'
import { JournalEntry } from './JournalEntry'

export const JournalEntryList = () => {

  const [journalEntries, setJournalEntries] = useState([])

  useEffect(
    () => {
      getEntries()
    },
    []
  )

  const getEntries = () => {
    getAllJournalEntries()
      .then(entries => setJournalEntries(entries))
  }

  console.log(journalEntries)


  return <>
    <h2>Journal Entries</h2>

    <div className='journalEntries'>
      {
        journalEntries.map(entry => {
          return <div key={entry.id}>
            <JournalEntry key={`journalEntry--${entry.id}`}
              id={entry.id}
              date={entry.date}
              time={entry.time}
              description={entry.description}
              hoursSlept={entry.hoursSlept}
              water={entry.water}
              nutrition={entry.nutrition}
              mood={entry.mood}
              sessionLength={entry.sessionLength}
              getEntries={getEntries}
            />
          </div>
        }
        )
      }

    </div>
  </>

}