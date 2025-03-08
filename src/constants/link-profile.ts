import type { IconType } from "react-icons"
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

type LinkProfile = {
  Icon: IconType;
  link: string;
  name: string;
}

const linkProfiles: LinkProfile[] = [
  {
    Icon: FaGithub,
    link: 'https://github.com/JFKongphop',
    name: 'Github'
  },
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/kongphop-kingpeth-225308236',
    name: 'Linkedin'
  },
  {
    Icon: FaMedium,
    link: 'https://medium.com/@kongphopkingpeth',
    name: 'Medium'
  }
];

export default linkProfiles;