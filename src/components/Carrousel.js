import { useState } from 'react';

import arrowLeft from '../assets/ARROW_LEFT.png';
import arrowRight from '../assets/ARROW_RIGHT.png';
import '../styles/Carrousel.css';

function Carrousel({ pictures }) {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const picturesStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '25px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${pictures[currentIndex]})`,
  }

  const goToPreviousImg = () => {
    const isFirstPicture = currentIndex === 0
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  
  const goToNextImg = () => {
    const isLastPicture = currentIndex === pictures.length - 1
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="kasa-carrousel">
      <span className="kasa-carrousel-picture-number">{ `${currentIndex + 1} / ${pictures.length}` }</span>
      <img src={arrowLeft} alt="Flèche directionnelle" className="kasa-carrousel-arrow-left" onClick={goToPreviousImg} />
      <div
        style={picturesStyle}
      ></div>
      <img src={arrowRight} alt="Flèche directionnelle" className="kasa-carrousel-arrow-right" onClick={goToNextImg} />
    </div>
  )
}

export default Carrousel;