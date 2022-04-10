import { Link } from 'react-router-dom';
import nfLogo from '../../assets/logo_netflix.svg';
import FormInput from '../../components/form/FormInput';
import Form from '../../components/form/Form';

export default function Signup() {
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
              <Form
                onSubmit={{}}
                formInitialValues={{
                  emailAddress: '',
                  password: ''
                }}>
                <FormInput
                  type='email'
                  name="emailAddress"
                  placeholder='Email'
                />
                <FormInput
                  name="Password"
                  type="password"
                  placeholder='Password'
                />
                <FormInput
                  name="Password"
                  type="password"
                  placeholder='Password'
                />
                <button className="hybrid_auth_button">Sign Up</button>
              </Form>
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