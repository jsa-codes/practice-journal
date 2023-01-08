import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getJournalEntryById, updateJournalEntry } from '../managers/JournalEntryManager';
import "./JournalEntryForm.css"

export const JournalEntryEdit = () => {

  const { journalEntryId } = useParams()

  const navigate = useNavigate()
  const [currentEntry, setCurrentEntry] = useState({})


  const [entry, updateEntry] = useState({
    hours_slept: "",
    water: "",
    nutrition: "",
    mood: "",
    description: "",
    session_length: "",
  });


  // FEEDBACK SLIDE IN ------------------------------
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (feedback !== '') {
      // Clear feedback to make entire element disappear after 3 seconds
      setTimeout(() => setFeedback(''), 3000);
    }
  }, [feedback]);
  // ------------------------------------------------------


  useEffect(
    () => {
      getJournalEntryById(journalEntryId)
        .then(currentEntry => setCurrentEntry(currentEntry))
    },
    [journalEntryId]
  )

  useEffect(() => {
    updateEntry({
      id: currentEntry.id,
      hours_slept: currentEntry.hours_slept,
      water: currentEntry.water,
      nutrition: currentEntry.nutrition,
      mood: currentEntry.mood,
      description: currentEntry.description,
      session_length: currentEntry.session_length,
    });
  }, [currentEntry]);


  const handleChange = (e) => {
    updateEntry({ ...entry, [e.target.name]: e.target.value });
  };




  const handleSubmit = (evt) => {
    evt.preventDefault();


    const updatedEntry = {
      id: journalEntryId,
      hours_slept: entry.hours_slept,
      water: entry.water,
      nutrition: entry.nutrition,
      mood: entry.mood,
      description: entry.description,
      session_length: entry.session_length,
    }

    // Object being passed in from the updatedEntry object above
    updateJournalEntry(updatedEntry)
      .then(alert("Your Journal Entry has been updated!"))
      .then(navigate('/journalEntries'))


  };



  return (
    <>
      <div
        className={`${feedback.includes('Error') ? 'error' : 'feedback'} ${feedback === '' ? 'invisible' : 'visible'
          }`}
      >
        {feedback}
      </div>


      <form className='journalEntryForm'>
        <h2 className='entry__title'>Journal Entry</h2>

        <fieldset>
          <div className='form-group'>
            <label htmlFor='hoursSlept'>Hours Slept</label>
            <input
              type='number'
              className='form-control'
              value={entry.hours_slept}
              name='hours_slept'
              placeholder='How much slept did you get last night?'
              onChange={handleChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='water'>Glasses of Water</label>
            <input
              type='number'
              className='form-control'
              value={entry.water}
              name='water'
              placeholder='How many glasses of water have you had today?'
              onChange={handleChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='nutrition'>What You've Eaten Today</label>
            <input
              type='text'
              className='form-control'
              value={entry.nutrition}
              name='nutrition'
              placeholder='What have you eaten today?'
              onChange={handleChange} />

          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='description'>Current Mood</label>
            <input
              type='text'
              className='form-control'
              value={entry.mood}
              name='mood'
              placeholder='How are you feeling?'
              onChange={handleChange} />

          </div>
        </fieldset>

        <fieldset>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              className='form-control'
              value={entry.description}
              name='description'
              placeholder='Description'
              onChange={handleChange} />

          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='session_length'>Session Length</label>
            <input
              type='number'
              className='form-control'
              value={entry.session_length}
              name='session_length'
              placeholder='Amount of time spent practicing?'
              onChange={handleChange} />

          </div>
        </fieldset>
        <button
          onClick={(handleSubmit)}
          className='btn btn-primary button-52'>
          Save Entry
        </button>
      </form>
    </>
  );
}

