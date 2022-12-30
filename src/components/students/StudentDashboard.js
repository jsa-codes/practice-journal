import { CommentList } from '../comments/CommentList'
import { InstructorList } from '../instructors/InstructorList'

export const StudentDashboard = () => {
    return <>
        <InstructorList />
        <CommentList />
    </>
}