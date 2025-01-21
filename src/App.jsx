import bgVideo from '../Resource/BG.mp4';
import logo from "../Resource/InnoLogo.png"
import './App.css'

function App() {
  

  return (
    <>
      <div className="relative">
        <div className="absolute top-8 left-0 w-full flex justify-center">
          <h1 className="typing-heading text-base sm:text-lg md:text-xl lg:text-1xl font-bold opacity-50  font-monospace text-cyan-400">
            INFORMATION TECHNOLOGY
          </h1>
        </div>

        <video
          loop
          autoPlay
          muted
          className="bg-video absolute top-0 left-0 w-full h-full object-cover"
          src={bgVideo}
          type="video/mp4"
        ></video>


        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>


        <div className="flex flex-col ga md:flex-row justify-center items-center text-white h-screen relative z-10">
          <span className="text-6xl md:text-8xl uppercase drop-shadow-[0_0_5px_rgb(0,255,255)] font-bold">Inno</span>

          <img
            src={logo}
            alt="Logo"
            className="w-40 md:w-50 lg:w-60 h-auto drop-shadow-[0_0_10px_rgb(0,255,255)] mx-4"
          />
          <span className="uppercase text-6xl md:text-8xl  font-bold drop-shadow-[0_0_5px_rgb(0,255,255)] ">Vision</span>
        </div>
      </div>

    </>
  )
}

export default App
