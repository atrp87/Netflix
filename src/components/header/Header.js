import Logo from '../../assets/logo_netflix.svg'
import { Link } from 'react-router-dom'

export default function Header({ children }) {
  return (
    <header className='header'>
      <nav className='navbar'>
        <img
          src={Logo}
          alt="Netflix logo"
          className='logo'
        />
        <Link to='signin'>Sign In</Link>
      </nav>
      {children}
    </header>
  )
}
