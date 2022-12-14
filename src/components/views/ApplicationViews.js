import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Authorized } from "./Authorized"
// import { JournalEntryForm } from "../journalentries/JournalEntryForm"
// import { JournalEntryDetails } from "../journalentries/JournalEntryDetails"
// import { CommentList } from "../comments/CommentList"
// import { JournalEntryEditForm } from "../journalentries/JournalEntryEditForm"
// import { EditComment } from "../comments/EditComment"
// import { JournalEntryComments } from "../journalentries/JournalEntryComments"
// import { StudentList } from "../students/StudentList"
// import { StudentDetails } from "../students/StudentDetails"
// import { CreateComment } from "../comments/CreateComment"
// import { CommentForm } from "../comments/CommentForm"
// import { JournalEntryList } from '../journalentries/JournalEntryList'


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />} />
      {/* <Route path="/alljournalentries" element={<JournalEntryList token={token} />} />
      <Route path="/journalentryform" element={<JournalEntryForm token={token} />} />
      <Route path="/journalentries/:journalentryId" element={<JournalEntryDetails token={token} loggedInUser={loggedInUser} />} />
      <Route path="/journalentries/:journalentryId/edit" element={<JournalEntryEditForm token={token} />} />
      <Route path="/journalentries/:journalentryId/comments" element={<JournalEntryComments token={token} />} />
      <Route path="/comments" element={<CommentList />} />
      <Route path="/journalentries/:journalentryId/newComment" element={<CreateComment token={token} />} />
      <Route path="/comment/:commentId/editcomment" element={<EditComment token={token} />} />
      <Route path="/commentform" element={<CommentForm token={token} />} />

      <Route path="/students" element={<StudentList token={token} loggedInUser={loggedInUser} />} />
      <Route path="/students/:studentId/studentdetails" element={<StudentDetails token={token} />} /> */}

    </Routes>
  </>
}