import HerosectionCarousel from "../components/common/HerosectionCaarousel";
import OrganizationalInitiatives from "../components/initiatives/OrganizationalInitiatives";
import OtherInitiatives from "../components/initiatives/OtherInitiatives";
import ProjectInitiatives from "../components/initiatives/ProjectInitiatives";

import Heading from "../components/common/Heading";

interface HeroImages {
  image: string;
}

const myHeroImages: HeroImages[] = [
  {
    image: "/images/AboutBg.png",
  },
  {
    image: "/images/Herosectionimg.png",
  },
  {
    image: "images/Herosectionimg.png",
  },
];

interface Initiatives {
  startDate: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  id: number;
}

const myInitiatives: Initiatives[] = [
  {
    startDate: "20 Feb 2024",
    title: "Mendo Trust",
    description: `Mendo Trust could be a local or niche organization, a fictional entity, or a newly
established initiative that has gained widespread recognition yet.
If Mendo Trust&quot; is a local organization or initiative, you may want to provide more
context or specify its area of focus or location so I can provide more accurate
information.
Alternatively, if Mendo Trust; is a fictional concept or a newly formed organization, you
might consider elaborating on its purpose, mission, or goals, and I can help you create a
description or backstory for it.`,
    image: "/images/common/initiatives.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 1,
  },
  {
    startDate: "20 Feb 2024",
    title: "Language preservation project",
    description: `Language preservation projects are initiatives aimed at safeguarding endangered languages
from extinction by documenting, revitalizing, and promoting their use within communities. These
projects are vital for maintaining linguistic diversity, cultural heritage, and the identities of
language-speaking communities worldwide.`,
    image: "/images/common/Timeline.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 2,
  },
  {
    startDate: "20 Feb 2024",
    title: "Awarerness Campaign",
    description: `An awareness campaign is a strategic effort designed to inform, educate, or mobilize individuals
or groups about a particular issue, cause, or initiative. These campaigns aim to raise
awareness, change attitudes, and inspire action among target audiences. Awareness
campaigns can be organized by governments, non-profit organizations, businesses, or
community groups, and they often utilize a variety of communication channels and tactics to

reach their objectives.`,
    image: "/images/common/initiatives.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 3,
  },
  {
    startDate: "20 Feb 2024",
    title: "Donation Campaign",
    description: `A donation campaign is a coordinated effort to raise funds for a specific cause, organization,
project, or initiative. These campaigns are typically organized by non-profit organizations,
charities, community groups, or individuals to support a wide range of needs, including
humanitarian aid, medical research, disaster relief, environmental conservation, education, and
more.`,
    image: "/images/common/Timeline.png",
    logo: "/images/common/InitiativesLogo.png",
    id: 4,
  },
];
const InitiativesPage: React.FC = () => {
  return (
    <>
      <HerosectionCarousel myHeroImages={myHeroImages} />
      <div className="py-10">
        <Heading heading="Initiatives" />
      </div>
      <OrganizationalInitiatives myInitiatives={myInitiatives} />
      <ProjectInitiatives />
      <OtherInitiatives myInitiatives={myInitiatives} />
    </>
  );
};

export default InitiativesPage;
