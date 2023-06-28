import { Link } from 'react-router-dom';
import '../styles/Thumb.css'

function Thumb({ dataObject }) {
  return (
    <div className="kasa-thumb">
      <Link to={`/location/${dataObject.id}`} className="kasa-thumb-link">
        <span className="kasa-thumb-title">{ dataObject.title }</span>
        <div className="kasa-thumb-overlay"></div>
        <img src={ dataObject.cover } alt="Appartement en location" className="kasa-thumb-img"/>
      </Link>
    </div>
  )
}

export default Thumb;