import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  const home = 'Accueil'
  const about = 'A Propos'

  return (
    <nav>
      <Link to="/" className="kasa-navbar-home">{ home }</Link>
      <Link to="/about" className="kasa-navbar-about">{ about }</Link>
    </nav>
  )
}

export default Navbar;