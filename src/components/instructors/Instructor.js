import { Link } from 'react-router-dom'

export const Instructor = ({ id, full_name, age, style }) => {
    <Link>This is the Student's Profile</Link>


    return (
        <section className="instructor">
            <div>
                <Link to={`/instructors/${id}`}>Name: {full_name}</Link>
            </div>
            <div>Age:{age}</div>
        </section>
    )
}