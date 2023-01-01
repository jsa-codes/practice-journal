import { CommentList } from '../comments/CommentList'
import { SelectInstructor } from '../instructors/SelectInstructor'
import { JournalEntryList } from '../journalentries/JournalEntryList'

export const StudentDashboard = () => {
    return <>
        <SelectInstructor />
        <CommentList />
        <JournalEntryList />
    </>
}