import { Authorized } from '../views/Authorized'
import { Route, Routes } from 'react-router-dom'
import { HomeContainer } from '../home/HomeContainer'
// LOGIN
import { Login } from '../auth/Login'
import { About } from '../about/About'
import { LandingPage } from '../home/LandingPage'
// INSTRUCTOR
import { Instructor } from '../instructors/Instructor'
import { SelectInstructor } from '../instructors/SelectInstructor'
import { InstructorDashboard } from '../instructors/InstructorDashboard'
import { InstructorProfileForm } from '../instructors/InstructorProfileForm'
// STUDENT
import { Student } from '../students/Student'
import { StudentList } from '../students/StudentList'
import { StudentDashboard } from '../students/StudentDashboard'
import { StudentProfileForm } from '../students/StudentProfileForm'
// REGISTER
import { RegisterInstructor } from '../auth/RegisterInstructor'
import { RegisterStudent } from '../auth/RegisterStudent'
// COMMENT
import { CommentList } from '../comments/CommentList'
import { CommentForm } from '../comments/CommentForm'
// JOURNAL ENTRY
import { JournalEntryForm } from '../journalentries/JournalEntryForm'
import { JournalEntryList } from '../journalentries/JournalEntryList'
import { MyJournalEntries } from '../journalentries/MyJournalEntries'
import { JournalEntry } from '../journalentries/JournalEntry'

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path='/' element={<HomeContainer />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registerstudent' element={<RegisterStudent />} />
            <Route path='/registerinstructor' element={<RegisterInstructor />} />
            <Route path='/landingPage' element={<LandingPage />} />

            <Route element={<Authorized />}>
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/:studentId" element={<Student />} />
                <Route path="/students/:studentId" element={<StudentDashboard />} />
                <Route path="/profile" element={<StudentProfileForm />} />
                <Route path="/instructorDashboard" element={<InstructorDashboard />} />
                <Route path="/selectInstructor" element={<SelectInstructor />} />
                <Route path="/instructors/:instructorId" element={<Instructor />} />
                <Route path="/instructors/:instructorId/profile" element={<InstructorProfileForm />} />
                <Route path="/comments" element={<CommentList />} />
                <Route path="/commentForm" element={<CommentForm />} />
                <Route path="/journalEntryForm" element={<JournalEntryForm />} />
                <Route path="/journalEntries" element={<JournalEntryList />} />
                <Route path="/journalEntries/:journalEntryId" element={<JournalEntry />} />
                <Route path="/myJournalEntries" element={<MyJournalEntries />} />

            </Route>
        </Routes>
    </>
}


