import Logo from "./Logo";
import Navbar from "./Navbar";

import '../styles/Header.css';

function Header() {
  return (
    <div className="kasa-header">
      <Logo logoColor="red" />
      <Navbar />
    </div>
  )
}

export default Header;