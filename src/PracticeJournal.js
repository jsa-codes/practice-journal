import { Route, Routes } from 'react-router-dom'
import { About } from './components/about/About'
import { Login } from './components/auth/Login'
import { RegisterInstructor } from './components/auth/RegisterInstructor'
import { RegisterStudent } from './components/auth/RegisterStudent'
import { ApplicationViews } from './components/views/ApplicationViews'
import { Authorized } from './components/views/Authorized'


export const PracticeJournal = () => {

  return <Routes>

    <Route path='/about' element={<About />} />
    <Route path='/login' element={<Login />} />
    <Route path='/registerstudent' element={<RegisterStudent />} />
    <Route path='/registerinstructor' element={<RegisterInstructor />} />

    <Route path="*" element={
      <Authorized >
        <>
          <ApplicationViews />
        </>
      </Authorized>
    } />

  </Routes>


}