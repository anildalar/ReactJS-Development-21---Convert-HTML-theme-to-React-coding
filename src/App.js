//1. Import Area
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AdminPage from './pages/admin/AdminPage'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import TeacherPage from './pages/teacher/TeacherPage'

//2. Defination Area
export default function App() {
    //2.1 Hooks Area

    //2.2 Function defination areaa


    //2.3 Return Statement
    // Every function rerturn something
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="admin" element={<AdminPage />}></Route>
                    <Route path="teacher" element={<TeacherPage />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


//.3 Expoert area