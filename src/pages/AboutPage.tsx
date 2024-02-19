import HerosectionCarousel from '../components/common/HerosectionCaarousel';
import AboutMe from '../components/aboutpage/Aboutme';
import Affiliations from '../components/aboutpage/Affiliations';
import Publications from '../components/aboutpage/Publications';
import PapersPresented from '../components/aboutpage/PapersPresented';
import LatestArticle from '../components/aboutpage/LatestArticles';

interface HeroImages {
  image: string;
}

const myHeroImages: HeroImages[] = [
  {
    image: '/images/AboutBg.png',
  },
  {
    image: '/images/Herosectionimg.png',
  },
  {
    image: 'images/Herosectionimg.png',
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <HerosectionCarousel myHeroImages={myHeroImages} />
      <AboutMe />
      <Affiliations />
      <Publications />
      <PapersPresented />
      <LatestArticle />
    </>
  );
};
export default AboutPage;
