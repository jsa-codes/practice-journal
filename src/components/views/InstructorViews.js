import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { Instructor } from '../instructors/Instructor'
import { InstructorDashboard } from '../instructors/InstructorDashboard'
import { InstructorNav } from '../nav/InstructorNav'
import { StudentDetails } from '../students/StudentDetails'
import { StudentList } from '../students/StudentList'

export const InstructorViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <InstructorNav />

                    <h1 className="title--main">Practice Journal</h1>
                    <div>Music is a Journey.</div>

                    <Outlet />
                </>
            }>  
                <Route path='/booty' element={<InstructorDashboard />} />
                <Route path='students' element={<StudentList />} />
                <Route path='/instructorNav' element={<InstructorNav />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/students/:studentId/details" element={<StudentDetails />} />
                <Route path="/instructors/:instructorId" element={<Instructor />} />
                <Route path="/comments" element={<CommentList />} />
            </Route>
        </Routes>

    )
}