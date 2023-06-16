import Thumb from "./Thumb";
import locationList from "../data/locationList";
import '../styles/Gallery.css'

function Gallery() {
  return (
    <ul className="kasa-locations">
      {locationList.map((location, index) => (
        <li key={`${location}-${index}`} className="kasa-locations-element"><Thumb dataObject={location} /></li>
      ))}
    </ul>
  )
}

export default Gallery;