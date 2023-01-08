import { InstructorNav } from '../nav/InstructorNav'
import { StudentList } from '../students/StudentList'
import { InstructorProfileForm } from './InstructorProfileForm'


export const InstructorDashboard = () => {

    return <>
        <InstructorNav />
        <InstructorProfileForm />
        <StudentList />
    </>
}