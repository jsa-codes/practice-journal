import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { updateStudent } from '../managers/StudentManager';
import { getCurrentUser } from '../managers/UserManager';
import "./StudentProfileForm.css"

export const StudentProfileForm = () => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState({})

    const [profile, updateProfile] = useState({
        age: "",
        style: "",
        years_playing: "",
    });

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
            style: currentUser.style,
            years_playing: currentUser.years_playing,
        });
    }, [currentUser]);


    const handleChange = (e) => {
        updateProfile({ ...profile, [e.target.name]: e.target.value });
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();

        const updatedStudent = {
            id: currentUser.id,
            age: profile.age,
            style: profile.style,
            years_playing: profile.years_playing,
        }
        // Object being passed in from the updatedStudent object above
        updateStudent(updatedStudent).then(alert("Your Profile has been updated!"))
            .then(navigate('/'))
    };

    return (
        <>
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
                        <label htmlFor='style'>Guitar Style</label>
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
                        <label htmlFor='years_playing'>How long have you been playing?</label>
                        <input
                            type='number'
                            className='form-control'
                            value={profile.years_playing}
                            name='years_playing'
                            placeholder='Years You Have Been Playing?'
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

