import '../styles/Tag.css';

function Tag({tagList}) {
  return (
    <ul className="kasa-location-tag">
      {tagList.map((locationTag, index) => (
        <li key={`${locationTag}-${index}`} className="kasa-location-tag-list">
          <span className="kasa-location-tag-list-element">{locationTag}</span>
        </li>
      ))}
    </ul>
  )
}

export default Tag;