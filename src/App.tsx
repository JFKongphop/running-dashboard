import { useEffect, useState } from "react";
import { githubContribution } from "@/lib/github-data";
import TechStackCard from "@/components/cards/TechStackCard";
import TechStackDescriptionCard from "@/components/cards/TechStackDescriptionCard";
import techStack from "@/constants/tech-stack";
import LinkCard from "@/components/cards/LinkCard";
import linkProfiles from "@/constants/link-profile";
import { FaExternalLinkAlt } from "react-icons/fa";

const App = () => {
  const [sumContributions, setSumContributions] = useState<number>(0);
  
  useEffect(() => {
    (async () => {
      const sum = await githubContribution();
      setSumContributions(sum);
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <div 
        className="first-screen w-full h-screen flex flex-col gap-4 justify-center items-center p-8"
      >
        <div className="w-full flex sm:justify-center">
          <div className="flex flex-row items-center gap-2">
            <img 
              src="/JFKongphop.jpg" 
              className="w-8 h-8 rounded-full" 
            />
            <p className="text-xl">JFKongphop</p>
          </div>
        </div>
        <div className="w-full flex sm:justify-center">
          <div className="flex flex-row gap-2">
            {
              linkProfiles.map(({ Icon, link, name }) => (
                <LinkCard 
                  Icon={Icon}
                  link={link}
                  name={name}
                />
              ))
            }
          </div>
        </div>
        <div 
          className="flex flex-col gap-4 w-1/2 text-center max-sm:w-full max-sm:text-start max-sm:text-3xl"
        >
          <p 
            className="text-5xl leading-14 max-sm:text-3xl max-sm:leading-10"
          >
            Enthusiastic about <br/> Blockchain Application, <br/>Full-Stack, and Distance Running
          </p>
          <p className="text-lg opacity-50">
            I’m pursuing studies in Financial Engineering but have a strong interest in Computer Science, particularly in Blockchain technology and Full-Stack development. <br/> I’m also passionate about track distance running.
          </p>
        </div>
      </div>
      <div 
        className="second-screen w-full min-h-screen flex flex-col gap-4 justify-center items-center p-8"
      >
        <div 
          className="w-full h-full flex flex-col gap-8 items-center text-lg max-sm:text-xs justify-center"
        >
          <div className="w-2/3 max-sm:w-full flex flex-col gap-4">
            <p 
              className="text-center text-2xl"
            >
              {sumContributions} contributions last year
            </p>
            <img 
              src="https://ghchart.rshah.org/4b5563/JFKongphop" 
              alt="JFKongphop's GitHub Chart"
              className="w-full"
            />
          </div>
          <div className="w-2/3 max-sm:w-full flex flex-col gap-4">
            <p className="text-center text-2xl">Tech Stacks</p>
            <div className="grid grid-cols-4 max-sm:grid-cols-2 col-span-1 gap-2">
              {
                techStack.map(({ key, description }) => (
                  <TechStackCard key={key}>
                    <p>{key}</p>
                    <TechStackDescriptionCard description={description} />
                  </TechStackCard>
                ))
              }
            </div>
          </div>
          <div className="w-2/3 max-sm:w-full flex flex-col gap-4">
            <p className="text-center text-2xl">Hackathons</p>
            <div className="w-full flex flex-row max-sm:flex-col gap-4">
              <div className="w-2/3 max-sm:w-full flex flex-col gap-2">
                <p className="text-xl">zkDebit</p>
                <p className="text-base opacity-50">
                  zkDebit is an innovative payment platform that leverages zero-knowledge proofs (ZKPs) to enhance privacy and security in digital transactions. Unlike traditional payment systems, zkDebit eliminates the need to share sensitive details such as card numbers, CVVs, or expiration dates with merchants. Instead, users generate and submit a cryptographic proof verifying their ownership of the card and transaction validity.
                </p>
                <div className="flex flex-row justify-between items-center">
                  <p>(Backend and Smart Contract)</p>
                  <a 
                    href="https://ethglobal.com/showcase/zkdebit-ypjir" 
                    target="_blank"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="w-1/3 max-sm:w-full h-[200px]">
                <img 
                  src="/zkDebit.png" 
                  className="rounded-2xl h-[200px] w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100px] w-full bg-bright-shade flex flex-col justify-center items-center">
        <p>EMAIL</p>
        <a className=" underline" href="mailto:kongphopleo@gmail.com">Kongphopleo@gmail.com</a>
      </div>
    </div>
  )
}

export default App;