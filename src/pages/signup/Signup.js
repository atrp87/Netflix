import { Link } from 'react-router-dom';
import nfLogo from '../../assets/logo_netflix.svg';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/firebase'

export default function Signup() {

  const userSignupHandler = (e) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className="hybrid_wrapper">
      <div className="hybrid_background"></div>
      <div className="hybrid_auth_contents">
        <div className="hybrid_auth_header">
          <Link to="/">
            <img
              src={nfLogo}
              alt="Netflix logo"
              className='svg-nfLogo'></img>
          </Link>
        </div>
        <div className="hybrid_auth_body">
          <div className="hybrid_auth_content">
            <h1 className="hybrid_auth_page_title">
              Sign Up
            </h1>
            <div className="hybrid_form">
              <form >
                <div className="form_input">
                  <input
                    type='email'
                    name="email"
                    placeholder='Email'
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_input">
                  <input
                    type='email'
                    name="email"
                    placeholder='Email'
                  // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form_input">
                  <input
                    name="password"
                    type="password"
                    placeholder='Password'
                  // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form_input">
                  <input
                    name="password"
                    type="password"
                    placeholder='Password'
                  // onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="hybrid_auth_button">Sign In</button>
              </form>
            </div>
            <div className="hybrid_auth_social">
              <div className="hybrid_auth_action">
                Already a member?
                <Link to='/login'> Sign In</Link>
              </div>
              <div className="terms_of_use">
                <p>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}