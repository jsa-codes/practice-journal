import { Authorized } from '../views/Authorized'
import { Route, Routes } from 'react-router-dom'

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route element={<Authorized />}>

            </Route>
        </Routes>
    </>
}


