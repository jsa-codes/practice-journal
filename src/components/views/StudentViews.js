import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { CommentList } from '../comments/CommentList'
import { SelectInstructor } from '../instructors/SelectInstructor'
import { JournalEntry } from '../journalentries/JournalEntry'
import { JournalEntryDetails } from '../journalentries/JournalEntryDetails'
import { JournalEntryEdit } from '../journalentries/JournalEntryEdit'
import { JournalEntryForm } from '../journalentries/JournalEntryForm'
import { JournalEntryList } from '../journalentries/JournalEntryList'
import { StudentNav } from '../nav/StudentNav'
import { StudentDashboard } from '../students/StudentDashboard'
import { StudentProfileForm } from '../students/StudentProfileForm'

export const StudentViews = () => {
    return (

        <Routes>
            <Route path='/' element={
                <>
                    <StudentNav />

                    {/* <h1 className="title--main">Practice Journal</h1> */}

                    <Outlet />
                </>
            }>
                <Route path='/studentdashboard' element={<StudentDashboard />} />
                <Route path="/students/:studentId" element={<StudentProfileForm />} />
                <Route path="/comments" element={<CommentList />} />
                <Route path="/instructors" element={<SelectInstructor />} />
                <Route path="/journalEntries" element={<JournalEntryList />} />
                <Route path="/journalEntries/:journalEntryId" element={<JournalEntry />} />
                <Route path="/journalEntries/:journalEntryId/details" element={<JournalEntryDetails />} />
                <Route path="/journalEntryForm" element={<JournalEntryForm />} />
                <Route path="/journalEntries/:journalEntryId/edit" element={<JournalEntryEdit />} />
            </Route>
        </Routes>


    )
}

/* 
 1. Create a Tab for Instructor List 
    - This only renders the current list of instructors
    - This is the route you want to navigate to when clicking on a tab
2. Button 
    onClick event triggers the update of the student.intructors value
    Only update the key 
*/
