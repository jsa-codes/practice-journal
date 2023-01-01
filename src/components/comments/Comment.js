import "./Comment.css"

export const Comment = ({ id, description, user }) => {
  return (
    <section className='comment__section' key={`comment--${id}`}>
      <div className='card'>
        <div className="comment">
          <h4>Name: {user.first_name}</h4>
          <p>Description: {description}</p>
          <button className='button-52'
          >Respond</button>
        </div>
      </div>
    </section>
  )
}


