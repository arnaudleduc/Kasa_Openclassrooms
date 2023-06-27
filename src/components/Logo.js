import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import whiteLogo from '../assets/LOGO_WHITE.png';
import '../styles/Logo.css';

function Logo({ logoColor }) {

  return (
    logoColor === 'red' ?
      <Link to="/"><img src={logo} alt="Logo Kasa" className="kasa-header-logo" /></Link>
      :
      <img className="kasa-footer-logo" src={whiteLogo} alt="Logo Kasa" />
  )
}

export default Logo;