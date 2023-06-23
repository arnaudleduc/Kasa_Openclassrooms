import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import aboutPageList from "../../data/aboutPageList";

function About() {
  return (
    <div>
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