import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import './scss/style.scss'
import React from 'react'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/Login'
          element={<Login />} />
        {/* <Route
          path='/signup/:id'
          element={<SignUp />}
        /> */}
        {/* <Route
          path='/browse'
          element={<Browse />}
        /> */}
      </Routes>
    </div>
  );
}
