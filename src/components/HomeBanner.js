import homeBanner from '../assets/BANNER.png'
import '../styles/HomeBanner.css'

function HomeBanner() {
  return (
    <div className="kasa-home-banner">
      <div className="kasa-home-banner-background"></div>
      <img src={homeBanner} alt="Falaise en bord de mer" className="kasa-home-banner-img" />
      <div className="kasa-home-banner-text">Chez vous, partout et ailleurs</div>
    </div>
  )
}

export default HomeBanner;