import background from '../../assets/404_bg.jpeg'
import { useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react'
import Browse from '../browse/Browse'
import { Navigate } from 'react-router-dom'

export default function PageNotFound() {
  const { currentUser } = useContext(AuthContext)

  const redirectHandler = () => {
    console.log(currentUser);
    !currentUser ? <Browse /> : <Navigate to='/login' />
  }
  return (
    <div className="PageNotFound">
      <img src={background} alt="Lost in space" />

      <div className="content">
        <div className="404_title">
          <h1>Lost your way ?</h1>
        </div>
        <div className="404_subtitle">
          <h4>Sorry, we can't find that page. You'll find loads to explore on the home page.</h4>
        </div>
        <div className="404_btn">
          <button onClick={() => redirectHandler()}>Netflix Home</button>
        </div>
        <div className="error">
          <p>Error Code</p>
        </div>
      </div>
    </div>
  )
}
