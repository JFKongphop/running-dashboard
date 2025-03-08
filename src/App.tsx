import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { githubContribution } from "@/lib/github-data";
import TechStackCard from "@/components/cards/TechStackCard";
import TechStackDescriptionCard from "@/components/cards/TechStackDescriptionCard";
import techStack from "@/constants/tech-stack";
import LinkCard from "@/components/cards/LinkCard";

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
            <LinkCard 
              Icon={FaGithub}
              link={'https://github.com/JFKongphop'}
              name={'Github'}
            />
            <LinkCard 
              Icon={FaLinkedin}
              link={'https://www.linkedin.com/in/kongphop-kingpeth-225308236'}
              name={'Linkedin'}
            />
            <LinkCard 
              Icon={FaMedium}
              link={'https://medium.com/@kongphopkingpeth'}
              name={'Medium'}
            />
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
          className="w-full h-full flex flex-col gap-6 items-center text-lg max-sm:text-xs justify-center"
        >
          <div className="w-2/3 max-sm:w-full flex flex-col gap-4">
            <p 
              className="text-center"
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
            <p className="text-center">Tech Stacks</p>
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
        </div>
      </div>
    </div>
  )
}

export default App;