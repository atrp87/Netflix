
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Series from './pages/series/Series'
import Films from './pages/films/Films'
import MyList from './pages/my_list/MyList'
import './scss/style.scss'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'

export default function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ Children }) => {
    return currentUser ? (Children) : <Navigate to='/login' />
  }

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
          element={<Signup />}
        />
        <Route
          path='/series'
          element={<Series />}
        />
        <Route
          path='/films'
          element={<Films />}
        />
        <Route
          path='/mylist'
          element={<MyList />}
        />
      </Routes>
    </div>
  );
}
