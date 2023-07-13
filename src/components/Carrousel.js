import { useState } from 'react';

import arrowLeft from '../assets/ARROW_LEFT.png';
import arrowRight from '../assets/ARROW_RIGHT.png';
import '../styles/Carrousel.css';

function Carrousel({ pictures }) {
  const [ currentIndex, setCurrentIndex ] = useState(0)

  const picturesStyle = {
    backgroundImage: `url(${pictures[currentIndex]})`,
  }

  const onlyOnePicture = pictures.length === 1 ? {display: 'none'} : {display: 'block'};

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
      <img style={onlyOnePicture} src={arrowLeft} alt="Flèche directionnelle" className="kasa-carrousel-arrow-left" onClick={goToPreviousImg} />
      <div
        style={picturesStyle} className="kasa-carrousel-image-container"
      ></div>
      <img style={onlyOnePicture} src={arrowRight} alt="Flèche directionnelle" className="kasa-carrousel-arrow-right" onClick={goToNextImg} />
    </div>
  )
}

export default Carrousel;