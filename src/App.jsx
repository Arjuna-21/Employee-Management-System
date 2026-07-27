import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import { useNavigate } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navagate to ="/login" replace />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </div>
  )
}

export default App
