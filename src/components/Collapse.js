import arrow from '../assets/ARROW.png';
import { useState } from 'react';
import '../styles/Collapse.css';

export default function Collapse({title, content, isToggled, about}) {
  const [toggle, setToggle] = useState(isToggled);

  const handleToggle = () => setToggle(!toggle)
  return (
    <div className={about ? "kasa-collapse" : "kasa-collapse-location"} >
      <div className={about ? "kasa-collapse-headband" : "kasa-collapse-headband-location"} onClick={handleToggle}>
        <h3 className={about ? "kasa-collapse-title" : "kasa-collapse-title-location"} >
          {title}
        </h3>
        <img src={arrow} className={toggle ? "kasa-collapse-arrow kasa-collapse-arrow-up" : "kasa-collapse-arrow arrow-down"} alt="Contenu déroulant" />
      </div>
      <div className={toggle ? "kasa-collapse-content-show" : "kasa-collapse-content-hide"}>
        <p className="kasa-collapse-content-show-elements">
          {Array.isArray(content) ? content.map((item, index) => {
              return (
                  <span className="kasa-collapse-content-show-elements-list"key={index}>{item}<br /></span>
              )
          }) : content
          }
        </p>
      </div> 
    </div>
  )
}