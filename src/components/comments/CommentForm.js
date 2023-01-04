import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserById } from '../managers/UserManager'

export const CommentForm = () => {

    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        getUserById().then(setCurrentUser)
    }, [])

    const [comment, setComment] = useState({
        date: "",
        time: "",
        description: ""
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const commentToSendToAPI = {
            user_id: currentUser.id,
            description: comment.description,
            date: comment.date,
            time: comment.time
        }

        fetch(`http://localhost:8000/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentToSendToAPI)
        })
            .then((response) => response.json())
            .then(() => {
                navigate("/comments");
            });

    }

    return (
        <form className='commentForm'>
            <h2 className='commentForm__title'>New Comment</h2>
            <fieldset>
                <div className='form-group'>
                    <label htmlFor='description'>Description:</label>
                    <input
                        required
                        autoFocus
                        type='text'
                        className='form-control'
                        placeholder='Leave a comment'
                        value={comment.description}
                        onChange={(evt) => {
                            const copy = { ...comment };
                            copy.description = evt.target.value;
                            setComment(copy);
                        }}
                    />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className='btn btn-primary'>
                Leave a Comment
            </button>
        </form>
    );
}
