import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { InstructorList } from '../instructors/SelectInstructor'
import { StudentProfileForm } from '../students/StudentProfileForm'

export const StudentViews = () => {
    return <>
        <h2>Please Select Your Instructor</h2>
        <Routes>
            <Route path="/instructors" element={<InstructorList />} />
            <Route path="/comments" element={<CommentList />} />
            <Route path="/profile" element={<StudentProfileForm />} />
        </Routes>

    </>
}

/* 
 1. Create a Tab for Instructor List 
    - This only renders the current list of instructors
    - This is the route you want to navigate to when clicking on a tab
2. Button 
    onClick event triggers the update of the student.intructors value
    Only update the key 
*/
