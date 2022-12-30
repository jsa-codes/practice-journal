export const Comment = ({ id, description, user }) => {
  return (
    <section className="comment">
      <div>
        <div to={`/comments/${id}`}>Student: {user.first_name}</div>
        <div to={`/comments/${id}`}>Description: {description}</div>
      </div>

    </section>
  )
}