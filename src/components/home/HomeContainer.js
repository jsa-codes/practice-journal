import { InstructorDashboard } from '../instructors/InstructorDashboard';
import { StudentDashboard } from '../students/StudentDashboard';

export const HomeContainer = () => {


    const instructor = localStorage.getItem('instructor')
    const pjInstructor = JSON.parse(instructor)

    if (pjInstructor === true) {

        return <InstructorDashboard />
    }
    else if (pjInstructor === false) {
        return <StudentDashboard />
    }

}