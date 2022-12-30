import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { Instructor } from '../instructors/Instructor'
import { Student } from '../students/Student'
import { StudentList } from '../students/StudentList'

export const InstructorViews = () => {
    return (
        <Routes>
            <Route path='/' element={
                <>
                    <h1 className="title--main">Practice Journal</h1>
                    <div>Music is a Journey.</div>

                    <Outlet />
                </>
            }>
                {/* <Route path="/" element={<StudentList />} /> */}
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/:studentId" element={<Student />} />
                <Route path="/instructors/:instructorId" element={<Instructor />} />
                <Route path="/comments" element={<CommentList />} />
            </Route>
        </Routes>

    )
}