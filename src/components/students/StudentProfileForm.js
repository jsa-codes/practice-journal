import { useEffect, useState } from "react";
import { updateStudent } from '../managers/StudentManager';
import { getCurrentUser } from '../managers/UserManager';
import "./StudentProfileForm.css"

export const StudentProfileForm = () => {

    const [currentUser, setCurrentUser] = useState({})

    const [profile, updateProfile] = useState({
        age: "",
        style: "",
        yearsPlaying: "",
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
            getCurrentUser()
                .then(currentUser => setCurrentUser(currentUser))
        },
        []
    )

    useEffect(() => {
        updateProfile({
            age: currentUser.age,
            style: currentUser.style,
            yearsPlaying: currentUser.yearsPlaying,
        });
    }, [currentUser]);


    const handleSubmit = (evt) => {
        evt.preventDefault();


        const updatedStudent = {
            id: currentUser.id,
            age: profile.age,
            style: profile.style,
            yearsPlaying: profile.yearsPlaying,
        }

        // Object being passed in from the updatedStudent object above
        updateStudent(updatedStudent)


    };


    const handleChange = (e) => {
        updateProfile({ ...profile, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div
                className={`${feedback.includes('Error') ? 'error' : 'feedback'} ${feedback === '' ? 'invisible' : 'visible'
                    }`}
            >
                {feedback}
            </div>
            <form className='profile'>
                <h2 className='profile__title'>My Profile</h2>

                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='age'></label>
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
                        <label htmlFor='style'></label>
                        <input
                            type='text'
                            className='form-control'
                            value={profile.style}
                            name='style'
                            placeholder='Style of Guitar You Play?'
                            onChange={handleChange} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className='form-group'>
                        <label htmlFor='yearsPlaying'></label>
                        <input
                            type='number'
                            className='form-control'
                            value={profile.yearsPlaying}
                            name='yearsPlaying'
                            placeholder='Years You Have Been Playing?'
                            onChange={handleChange} />

                    </div>
                </fieldset>
                <button
                    onClick={(clickEvent) => handleSubmit(clickEvent)}
                    className='btn btn-primary button-52'>
                    Save Profile
                </button>
            </form>
        </>
    );
}

