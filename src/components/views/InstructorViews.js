import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { InstructorDashboard } from '../instructors/InstructorDashboard'
import { InstructorProfileForm } from '../instructors/InstructorProfileForm'
import { InstructorNav } from '../nav/InstructorNav'
import { StudentDetails } from '../students/StudentDetails'
import { StudentList } from '../students/StudentList'
import { HomePage } from '../home/HomePage'
import { JournalEntriesByStudent } from '../journalentries/JournalEntriesByStudent'

export const InstructorViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <InstructorNav />
                    {/* <h1 className="title--main">Practice Journal</h1>
                    <div>Music is a Journey.</div> */}

                    <Outlet />
                </>
            }>  
                <Route path='/' element={<HomePage />} />
                <Route path='/instructorNav' element={<InstructorNav />} />
                <Route path='/instructordashboard' element={<InstructorDashboard />} />
                <Route path="/instructors/:current" element={<InstructorProfileForm />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/:studentId/details" element={<StudentDetails />} />
                <Route path="/students/:studentId/journal" element={<JournalEntriesByStudent />} />
                <Route path="/comments" element={<CommentList />} />
            </Route>
        </Routes>

    )
}