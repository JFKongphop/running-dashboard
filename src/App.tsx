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
        <div 
          className="flex flex-col gap-4 w-1/2 text-center max-sm:w-full max-sm:text-start max-sm:text-3xl"
        >
          <p 
            className="text-5xl leading-14 max-sm:text-3xl max-sm:leading-10"
          >
            Enthusiastic about <br/> Blockchain Application, <br/>Full-Stack, and Distance Running
          </p>
          <p className="text-lg opacity-50">
            I’m pursuing studies in Financial Engineering but have a strong interest in Computer Science, particularly in Blockchain technology and Full-Stack development. I’m also passionate about track distance running.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App;