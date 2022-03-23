import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Signin from './pages/login/Signin';
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
          path='/Signin'
          element={<Signin />} />
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
