
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from '../managers/UserManager'
import './JournalEntryForm.css'

export const JournalEntryForm = () => {

  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()

  const [journalEntry, updateJournalEntry] = useState({
    // time: '',
    hours_slept: '',
    water: '',
    nutrition: '',
    mood: '',
    description: '',
    session_length: '',
  })




  // GET CURRENT LOGGED IN USER 
  useEffect(
    () => {
      getCurrentUser()
        .then(currentUser => setCurrentUser(currentUser))
    },
    []
  )



  const handleSaveButtonClick = (event) => {
    event.preventDefault();


    const entryToSendToAPI = {
      id: currentUser.id,
      // time: journalEntry.time,
      hours_slept: journalEntry.hours_slept,
      water: journalEntry.water,
      nutrition: journalEntry.nutrition,
      mood: journalEntry.mood,
      description: journalEntry.description,
      session_length: journalEntry.session_length,
    }

    // TO-DO: Perform the fetch() to POST the object to the API
    fetch(`http://localhost:8000/journalEntries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("pj_token")}`
      },
      body: JSON.stringify(entryToSendToAPI)
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/journalEntries");
      });
  }

  return (
    <form className='journalEntryForm'>
      <h2 className='journalEntryForm__title'>New Journal Entry</h2>

      <fieldset>
        <div className='form-group'>
          <label htmlFor='hours_slept'>Hours Slept:</label>
          <input
            required
            autoFocus
            type='number'
            className='form-control'
            placeholder='How many hours did you sleep?'
            value={journalEntry.hours_slept}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.hours_slept = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='water'>Water:</label>
          <input
            required
            autoFocus
            type='number'
            className='form-control'
            placeholder='How many glasses of water have you had today?'
            value={journalEntry.water}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.water = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='nutrition'>Nutrition:</label>
          <input
            required
            autoFocus
            type='text'
            className='form-control'
            placeholder='What have you eaten today?'
            value={journalEntry.nutrition}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.nutrition = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='mood'>Mood:</label>
          <input
            required
            autoFocus
            type='text'
            className='form-control'
            placeholder='How are you feeling?'
            value={journalEntry.mood}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.mood = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <input
            required
            autoFocus
            type='text'
            className='form-control'
            placeholder='What are you going to practice?'
            value={journalEntry.description}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.description = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className='form-group'>
          <label htmlFor='session_length'>Session Length:</label>
          <input
            required
            autoFocus
            className='form-control'
            type='number'
            placeholder='Minutes to practice?'
            value={journalEntry.session_length}
            onChange={(evt) => {
              const copy = { ...journalEntry };
              copy.session_length = evt.target.value;
              updateJournalEntry(copy);
            }}
          />
        </div>
      </fieldset>
      <button
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className='btn btn-primary btn-submit'>
        Submit Journal Entry
      </button>
    </form>
  );
}

