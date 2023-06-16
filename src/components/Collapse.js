import arrow from '../assets/ARROW.png';
import { useState } from 'react';
import '../styles/Collapse.css';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
      <div className="kasa-collapse" >
        <h3 className="kasa-collapse-title" onClick={() => setToggle(!toggle)} >
          {title}
          <img src={arrow} className={toggle ? 'kasa-collapse-arrow kasa-collapse-arrow_up' : 'kasa-collapse-arrow arrow_down'} alt="Contenu déroulant" />
        </h3>
        <div className={toggle ? 'kasa-collapse_content' : 'kasa-collapse_content_hidden'}>
          {Array.isArray(content) ? content.map((item, index) => {
              return (
                  <p key={index}>{item}</p>
              )
          }) : content
          }
        </div> 
      </div>
    )
}