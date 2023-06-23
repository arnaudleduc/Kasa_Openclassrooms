import homeBanner from '../assets/BANNER.png'
import aboutBanner from '../assets/ABOUT_BANNER.png'
import '../styles/Banner.css'

function Banner({about}) {
  return (
    <div className="kasa-home-banner">
      <div className="kasa-home-banner-background"></div>
      <img src={about ? aboutBanner : homeBanner} alt="Falaise en bord de mer" className="kasa-home-banner-img" />
      <div className={!about ? "kasa-home-banner-text" : "kasa-home-hide-banner-text"}>Chez vous, partout et ailleurs</div>
    </div>
  )
}

export default Banner;