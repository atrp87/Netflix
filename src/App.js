import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import './scss/style.scss'


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
        <Route
          path='/signup'
          element={<Signup />} // add params :id
        />
        <Route
        // path='/browse'
        // element={<Browse />}
        />
      </Routes>
    </div>
  );
}
