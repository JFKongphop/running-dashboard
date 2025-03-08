import { FaLinkedin, FaGithub } from "react-icons/fa";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { githubContribution } from "@/lib/github-data";

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
          <div className="flex flex-row gap-2 w-[250px]">
            <div 
              className="hover:ring-2 hover:ring-[#4b5563] px-4 py-2 rounded-4xl w-full flex flex-row items-center gap-2 bg-[#111827] cursor-pointer justify-center"
            >
              <FaGithub className="w-4 h-4" />
              <a 
                href="https://github.com/JFKongphop" 
                target="_blank" 
                className="text-white text-sm tracking-wider"
              >
                Github
              </a>
            </div>
            <div 
              className="hover:ring-2 hover:ring-[#4b5563] px-4 py-2 rounded-4xl w-full flex flex-row items-center gap-2 bg-[#111827] cursor-pointer justify-center"
            >
              <FaLinkedin className="w-4 h-4" />
              <a 
                href="https://www.linkedin.com/in/kongphop-kingpeth-225308236" 
                target="_blank" 
                className="text-white text-sm tracking-wider"
              >
                Linkedin
              </a>
            </div>
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
        className="second-screen w-full h-screen flex flex-col gap-4 justify-center items-center p-8"
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
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex flex-col justify-center items-center p-2 gap-1"
              >
                <p className="">Solidity / Foundry / Hardhat</p>
                <p 
                  className="max-sm:text-[8px] text-xs opacity-50"
                >
                  Smart contract development and testing
                </p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex flex-col justify-center items-center"
              >
                <p className="">Wagmi / Ether.js / Alloy</p>
                <p className="text-xs opacity-50">Web3 frontend interact and observe data</p>

              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex flex-col justify-center items-center"
              >
                <p className="">Next.js / React</p>
                <p className="text-xs opacity-50">Best choice for frontend development</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex flex-col justify-center items-center"
              >
                <p className="">React Native</p>
                <p className="text-xs opacity-50">Only one mobile development that I can do!</p>

              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Node / Express / Nest.js</p>
                
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Tailwind CSS / SASS</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Day.js</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Circom</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Gin / Fiber / Echo</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Axum</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Polars (rust) / Pandas</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Flask</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">mySQL / SQLite</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Google Cloud</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Railway / Vercel</p>
              </div>
              <div 
                className="border h-20 border-bright-shade rounded-lg hover:border-white flex justify-center items-center"
              >
                <p className="">Digital Ocean</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;