import { Link } from 'react-router-dom'

export const Student = ({ id, full_name, age, style }) => {
    <Link>This is the Student's Profile</Link>


    return (
        <section className="student">
            <div>
                <Link to={`/students/${id}`}>Name: {full_name}</Link>
            </div>
            <div>Age:{age}</div>
            <div>Style:{style}</div>
        </section>
    )
}