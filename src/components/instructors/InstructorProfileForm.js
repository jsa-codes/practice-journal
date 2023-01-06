import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { updateInstructor } from '../managers/InstructorManager';
import { getCurrentUser } from '../managers/UserManager';
import "./InstructorProfileForm.css"

export const InstructorProfileForm = () => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const [profile, updateProfile] = useState({
        age: "",
        years_playing: "",
        bio: "",
        location: "",
    });

    console.log(currentUser)
    // FEEDBACK SLIDE IN ------------------------------
    // const [feedback, setFeedback] = useState('');

    // useEffect(() => {
    //     if (feedback !== '') {
    //         // Clear feedback to make entire element disappear after 3 seconds
    //         setTimeout(() => setFeedback(''), 3000);
    //     }
    // }, [feedback]);
    // ------------------------------------------------------

    // GET CURRENT LOGGED IN USER 
    useEffect(
        () => {
            getCurrentUser()
                .then(currentUser => setCurrentUser(currentUser))
        },
        []
    )


    // UPDATE THE PROFILE OF THE CURRENT LOGGED IN USER
    useEffect(() => {
        updateProfile({
            age: currentUser.age,
            years_playing: currentUser.years_playing,
            bio: currentUser.bio,
            location: currentUser.location,
        });
    }, [currentUser]);


    const handleChange = (e) => {
        updateProfile({ ...profile, [e.target.name]: e.target.value });
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();


        const updatedInstructor = {
            id: currentUser.id,
            age: profile.age,
            years_playing: profile.years_playing,
            bio: profile.bio,
            location: profile.location,
        }

        // Object being passed in from the updatedStudent object above
        updateInstructor(updatedInstructor).then(alert("Your Profile has been updated!"))
        .then(navigate('/'))
    };

    return (
        <>
            {/* <div
                className={`${feedback.includes('Error') ? 'error' : 'feedback'} ${feedback === '' ? 'invisible' : 'visible'
                    }`}
            >
                {feedback}
            </div> */}
            <form className='profile'>
                <h2 className='profile__title'>My Profile</h2>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='age'>Your Current Age</label>
                        <input
                            type='number'
                            className='form-control'
                            value={profile.age}
                            name='age'
                            placeholder='How Old Are You?'
                            onChange={handleChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='years_playing'>How Long Have You Been Playing Guitar?</label>
                        <input
                            type='number'
                            className='form-control'
                            value={profile.years_playing}
                            name='years_playing'
                            placeholder='Years Playing Guitar'
                            onChange={handleChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='bio'>Bio</label>
                        <input
                            type='text'
                            className='form-control'
                            value={profile.bio}
                            name='bio'
                            placeholder='Tell us a little about yourself'
                            onChange={handleChange} />

                    </div>
                </fieldset>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='location'>Location</label>
                        <input
                            type='text'
                            className='form-control'
                            value={profile.location}
                            name='location'
                            placeholder='Where are you located?'
                            onChange={handleChange} />

                    </div>
                </fieldset>
                <button
                    onClick={(handleSubmit)}
                    className='btn btn-primary btn-save'>
                    Save Profile
                </button>
            </form>
        </>
    );
}

