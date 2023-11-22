import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Playground from '../pages/playground'


export default function RoutePages() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/playground" element={<Playground />} />
        </Routes>
    )
}  