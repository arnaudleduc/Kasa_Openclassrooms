import starGrey from '../assets/STAR_GREY.png';
import starRed from '../assets/STAR_RED.png';
import '../styles/Rating.css';

function Rating({ ratingValue }) {
	const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((rating, index) => (
        ratingValue >= rating ? (
        <img src={ starRed } alt="Etoile rouge" className="kasa-rating-star" key={rating.toString()}/>
        ) : (
        <img src={ starGrey } alt="Etoile grise" className="kasa-rating-star" key={rating.toString()}/>
        )
      ))}
    </div>
  )
}

export default Rating;