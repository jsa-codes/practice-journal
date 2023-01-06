import "./Comment.css"

export const Comment = ({ id, description, user }) => {
  return (
    <section className='comment__section' key={`comment--${id}`}>
      <div className='card'>
        <div className="comment">
          <h3>Name: {user.first_name}</h3>
          <h4>Description</h4>
          <p>{description}</p>
          <button className='button-52 btn-respond'
          >Respond</button>
          <button className='button-52 btn-delete'>Delete</button>
        </div>
      </div>
    </section>
  )
}


