import '../styles/Host.css';

function Host({hostInfo}) {
  return (
    <div className="kasa-host">
      <span className="kasa-host-name">{hostInfo.name}</span>
      <img src={hostInfo.picture} alt='Propriétaire du logement' className="kasa-host-img" />
    </div>
  )
}

export default Host;