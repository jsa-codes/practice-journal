import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { getJournalEntryById } from '../managers/JournalEntryManager';
import "./JournalEntryForm.css"

export const JournalEntryEdit = () => {

  const { journalEntryId } = useParams()

  const navigate = useNavigate()
  const [currentEntry, setCurrentEntry] = useState({})


  const [entry, updateEntry] = useState({
    hoursSlept: "",
    water: "",
    nutrition: "",
    mood: "",
    description: "",
    sessionLength: "",
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



  // GET CURRENT LOGGED IN USER 
  useEffect(
    () => {
      getJournalEntryById()
        .then(currentEntry => setCurrentEntry(currentEntry))
    },
    [journalEntryId]
  )

  // UPDATE THE PROFILE OF THE CURRENT LOGGED IN USER
  useEffect(() => {
    updateEntry({
      id: currentEntry.id,
      hours_slept: currentEntry.hoursSlept,
      water: currentEntry.water,
      nutrition: currentEntry.nutrition,
      mood: currentEntry.mood,
      description: currentEntry.description,
      session_length: currentEntry.sessionLength,
    });
  }, [currentEntry]);


  const handleChange = (e) => {
    updateEntry({ ...entry, [e.target.name]: e.target.value });
  };




  const handleSubmit = (evt) => {
    evt.preventDefault();


    const updatedEntry = {
      id: journalEntryId,
      hoursSlept: currentEntry.hoursSlept,
      water: currentEntry.water,
      nutrition: currentEntry.yearsPlaying,
      mood: currentEntry.mood,
      description: currentEntry.description,
      sessionLength: currentEntry.sessionLength,
    }

    // Object being passed in from the updatedEntry object above
    updateEntry(updatedEntry).then(() => navigate('/journalEntries'))


  };

  /* 
    - hoursSlept
    - water
    - nutrition
    - mood
    - description
    - sessionLength
  */


  return (
    <>
      <div
        className={`${feedback.includes('Error') ? 'error' : 'feedback'} ${feedback === '' ? 'invisible' : 'visible'
          }`}
      >
        {feedback}
      </div>


      <form className='entry'>
        <h2 className='entry__title'>Journal Entry</h2>

        <fieldset>
          <div className='form-group'>
            <label htmlFor='hoursSlept'></label>
            <input
              type='number'
              className='form-control'
              value={entry.hoursSlept}
              name='hoursSlept'
              placeholder='How much slept did you get last night?'
              onChange={handleChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='water'></label>
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
            <label htmlFor='nutrition'></label>
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
            <label htmlFor='yearsPlaying'></label>
            <input
              type='number'
              className='form-control'
              value={entry.yearsPlaying}
              name='yearsPlaying'
              placeholder='Years You Have Been Playing?'
              onChange={handleChange} />

          </div>
        </fieldset>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='description'></label>
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
            <label htmlFor='sessionLength'></label>
            <input
              type='number'
              className='form-control'
              value={entry.sessionLength}
              name='sessionLength'
              placeholder='Years You Have Been Playing?'
              onChange={handleChange} />

          </div>
        </fieldset>
        <button
          onClick={(handleSubmit)}
          className='btn btn-primary button-52'>
          Save Profile
        </button>
      </form>
    </>
  );
}

