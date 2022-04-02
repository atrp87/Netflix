import { Link } from 'react-router-dom'
import nfLogo from '../../assets/logo_netflix.svg'

export default function Login() {
  return (
    <div className="login_wrapper">
      <div className="login_wrapper_background">
        <div className="login_header">
          <Link to="/">
            <img
              src={nfLogo}
              alt="Netflix logo"
              className='svg-nfLogo'
            />
          </Link>
          <div className="login_body">
            <div>body</div>
          </div>
          <div className="login_footer">
            <div className="footer_wrapper">
              <p className='footer_top'>Questions? Contact us.</p>
              <div className="footer_row">
                <div className="col">
                  <Link to="#">FAQ</Link>
                  <Link to="#">Cookie Preferences</Link>
                </div>
                <div className="col">
                  <Link to="#">Help Centre</Link>
                  <Link to="#">Corporate Information</Link>
                </div>
                <div className="col">
                  <Link to="#">Terms of Use</Link>
                </div>
                <div className="col">
                  <Link to="#">Privacy</Link>
                </div>
              </div>
              <p className='footer_country'>Netflix United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
