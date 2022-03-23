import Logo from '../../assets/logo_netflix.svg'
import { Link } from 'react-router-dom'

export default function Header({ children }) {
  return (
    <header className='header section'>
      <div className="gradient_overlay"></div>
      <nav className='navbar'>
        <div className="nav_items">
          <img
            src={Logo}
            alt="Netflix logo"
            className='logo'
          />
          <Link to='signin'>Sign In</Link>
        </div>
      </nav>
      {children}
    </header>
  )
}
