import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutPageList from "../../data/aboutPageList";
import '../../styles/AboutPage.css';

function About() {
  return (
    <div className="kasa-about">
      <Banner about />
      <div>
        {aboutPageList.map((listItem, index) => (
          <Collapse title={listItem.title} content={listItem.content} about />
        ))}
      </div>
    </div>
  )
}

export default About;