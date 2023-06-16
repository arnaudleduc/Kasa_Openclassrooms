import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import whiteLogo from '../assets/LOGO_WHITE.png';

function Logo({ logoColor }) {

  return (
    logoColor === 'red' ? <Link to="/"><img src={logo} alt="Logo Kasa" /></Link> : <img className="kasa-footer-logo" src={whiteLogo} alt="Logo Kasa" /> 
  )
}

export default Logo;