import locationList from '../../data/locationList';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag';
import Host from '../../components/Host';
import Rating from '../../components/Rating';

function Location() {
  const { locationId } = useParams();
  const locationData = locationList.find(element => element.id === locationId )

  return (
    <div>
      <h1>{locationData.title}</h1>
      <h2>{locationData.location}</h2>
      <Tag tagList={locationData.tags} />
      <Host hostInfo={locationData.host} />
      <Rating ratingValue={locationData.rating} />
    </div>
  )
}

export default Location;