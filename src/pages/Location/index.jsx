import locationList from '../../data/locationList';
import { useNavigate, useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import '../../styles/LocationPage.css';
import { useEffect } from 'react';

function Location() {
  const { locationId } = useParams()
  const navigate = useNavigate();
  const locationData = locationList.find(element => element.id === locationId )

  useEffect(() => {
    if (locationData === undefined) {
      navigate('/404', { state: { message: "URL non valide" }});
    }
  });

  if (locationData) {
    return (
      <div className="kasa-location">
        <div className="kasa-location-carrousel-container">
          <Carrousel pictures={locationData.pictures} />
        </div>
        <div className="kasa-location-info-container">
          <div>
            <h1 className="kasa-location-title">{locationData.title}</h1>
            <h2 className="kasa-location-subtitle">{locationData.location}</h2>
            <Tag tagList={locationData.tags} />
          </div>
          <div className="kasa-location-host-container">
            <Host hostInfo={locationData.host} />
            <Rating ratingValue={locationData.rating} />
          </div>
        </div>
        <div className="kasa-location-details">
          <Collapse title="Description" content={locationData.description} isToggled />
          <Collapse title="Equipements" content={locationData.equipments} isToggled />
        </div>
      </div>
    )
  }
}

export default Location;