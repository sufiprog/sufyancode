import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaCode } from "react-icons/fa";
import handIcon from '../assets/hand-icon.png';
import sufiMain from '../assets/sufyan-main.webp';
import downloadIcon from '../assets/download-icon.png';
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="pb-20 pt-16 outfit ">
      {/* -------------Spotlight--------------------- */}
      <div>
        {/* <Spotlight
          className="-top-40  -left-10 md:-left-32 md:-top-20 h-screen"
          fill="black"
        /> */}
        <Spotlight
          className="h-[80vh] md:top-5 w-[50vw] top-0 left-0 text-black  "
          fill="purple"
        />
      </div>
      {/* ----------GRID----------- */}
      <div
        className="min-h-screen bg w-full dark:bg-black  bg-grid-black/[0.06]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>



      <div className="flex  items-center justify-center relative ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img className="my-5 object-cover rounded-full w-36 shadow-sm md:w-36" src={sufiMain} alt="" />

          <p className="uppercase tracking-widest text-xs sm:text-sm text-center text-gray-400 max-w-80">
            Welcome to Sufiprog Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold  text-center ">Transforming Designs into Seamless User Experiences</h2>
          <div className="flex gap-2 my-4">
            <img className=" size-4 md:size-5 object-cover " src={handIcon} alt="" />
            <p className="text-center text-gray-500 text-md md:text-lg lg:text-lg ">
              Hi! I&apos;m  M.Sufyan, a React.js Developer based in Karachi, Pakistan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 md:mt-5 items-center justify-center my-1 gap-3">
            <a
              className="px-8 hover:border-purple-600 py-3 border flex gap-1 rounded-full bg-gradient-to-r from-purple-200 to-purple-300 items-center shadow-sm"
              href="https://drive.google.com/uc?export=download&id=1_xU1R7ljg345sC80yOqC0RJipemwiLWg"
              rel="noopener noreferrer">
              Download Resume
              <img src={downloadIcon} className="w-4 ml-1 animate-bounce" alt="" />
            </a>
            <Link className="px-10 hover:border-blue-600 py-3 border rounded-full bg-white shadow-md flex gap-2 group items-center" to="/hire">Hire Me <FaCode className="text-lg group-hover:text-blue-500" /></Link>
          </div>
        </div>
      </div>
      <div className="relative z-50 text-black" />
    </div>
  );
};

export default Hero;