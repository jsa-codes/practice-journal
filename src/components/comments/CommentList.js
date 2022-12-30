import { useEffect, useState } from 'react'
import { getComments } from '../managers/CommentManager'
import { Comment } from '../comments/Comment'

export const CommentList = () => {

  const [comments, setComments] = useState([])

  useEffect(
    () => {
      getComments()
        .then(data => setComments(data))
    },
    []
  )

  return <>
    <h2>Comments</h2>

    <div className='comments'>
      {
        comments.map(comment => {
          return <div key={comment.id}>
            <Comment key={`comment--${comment.id}`}
              id={comment.id}
              description={comment.description}
              user={comment.user}

            />
          </div>
        }
        )
      }

    </div>
  </>

}