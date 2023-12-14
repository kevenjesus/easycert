import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Playground from '../pages/playground'
import Register from '../pages/Register'


export default function RoutePages() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/playground" element={<Playground />} />
        </Routes>
    )
}  