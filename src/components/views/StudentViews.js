import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { InstructorList } from '../instructors/InstructorList'

export const StudentViews = () => {
    return <>
        <h2>This is the Student View</h2>
        <Routes>
            <Route path="/instructors" element={<InstructorList />} />
            <Route path="/comments" element={<CommentList />} />
        </Routes>

    </>
}