import Aboutme from "../components/landingpage/Aboutme";
import Timeline from "../components/landingpage/Timeline";
import Initiatives from "../components/landingpage/Initiatives";
import Achievements from "../components/landingpage/Achievements";
import HerosectionCarousel from "../components/common/HerosectionCaarousel";

interface HeroImages {
  image: string;
}

const myHeroImages: HeroImages[] = [
  {
    image: "/images/Herosectionimg.png",
  },
  {
    image: "/images/AboutBg.png",
  },
  {
    image: "images/Herosectionimg.png",
  },
];

const LandingPage: React.FC = () => {
  return (
    <>
      <HerosectionCarousel myHeroImages={myHeroImages} />
      <Aboutme />
      <Timeline />
      <Initiatives />
      <Achievements />
    </>
  );
};
export default LandingPage;
