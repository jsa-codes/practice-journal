import { CommentList } from '../comments/CommentList'
import { SelectInstructor } from '../instructors/SelectInstructor'
import { JournalEntryList } from '../journalentries/JournalEntryList'
import { StudentNav } from '../nav/StudentNav'

export const StudentDashboard = () => {
    return <>
        <StudentNav />
        <SelectInstructor />
        <CommentList />
        <JournalEntryList />
    </>
}