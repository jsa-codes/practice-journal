import { CommentList } from '../comments/CommentList'
import { StudentList } from '../students/StudentList'

export const InstructorDashboard = () => {

    return <>
        <StudentList />
        <CommentList />
    </>
}