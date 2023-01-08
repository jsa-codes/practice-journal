import { CommentList } from '../comments/CommentList'
import { SelectInstructor } from '../instructors/SelectInstructor'
import { JournalEntryForm } from '../journalentries/JournalEntryForm'
import { JournalEntryList } from '../journalentries/JournalEntryList'
import { StudentNav } from '../nav/StudentNav'

export const StudentDashboard = () => {
    return <>
        <JournalEntryForm />
        <StudentNav />
        <SelectInstructor />
        <CommentList />
        <JournalEntryList />
    </>
}