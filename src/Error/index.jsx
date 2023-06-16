import { Link } from 'react-router-dom';
import '../styles/Error.css'

function Error() {
  return (
    <div className="kasa-error-page">
      <h1 className="kasa-error-page-title">404</h1>
      <h2 className="kasa-error-page-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="kasa-error-page-redirect">Retourner à la page d'accueil</Link>
    </div>
  )
}

export default Error;