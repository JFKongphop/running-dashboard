import { useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { getEvents } from "./lib/github-data";

const App = () => {
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

      </div>
    </div>
  )
}

export default App;