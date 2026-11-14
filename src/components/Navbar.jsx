import { Link } from 'react-router-dom'
import logo from '../assets/BAIRO_logo.png'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-bairo">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src={logo} alt="BAIRO Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-nav ms-auto">
        {NAV_LINKS.map(({ to, label }) => (
          <Link className="nav-link" to={to} key={to}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  </nav>
)

export default Navbar