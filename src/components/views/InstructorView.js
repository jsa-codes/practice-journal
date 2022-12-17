import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StudentList } from '../students/StudentList'

export const InstructorView = () => {
    return <>
        <div>This is the Instructor View</div>
        <Routes>
            <Route path="/students" element={<StudentList />} />
        </Routes>

    </>
}