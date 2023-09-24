import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
function IntroPage() {
  return (
    <div className="px-8 text-white pt-20 h-screen cursor-pointer">
      <div className="flex lg:flex-row md:flex-col flex-col justify-between items-center gap-y-10">
        <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-5 text-focus-in ">
          <p className="font-medium text-3xl">Hello There</p>
          <h1 className="font-semibold text-6xl text-center tracking-wide hover:text-[#F4A261] transition-colors duration-500">
            I’m Khalid Hasan Sagar
          </h1>
          <h2 className="text-[#F4A261] text-3xl font-medium tracking-wide hover:text-white transition-colors duration-500">
            Full Stack Developer
          </h2>
          <div className="flex flex-row gap-5">
            <Link target="_blank" href="https://github.com/hasan-sagar">
              <button className="border-2 border-white px-3 py-3 rounded-full transition-all duration-500 hover:bg-[#F4A261]">
                <FiGithub size={22} />
              </button>
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/khalid-hasan-sagar-413b801a2/"
            >
              <button className="border-2 border-white px-3 py-3 rounded-full transition-all duration-500 hover:bg-[#F4A261]">
                <AiFillLinkedin size={22} />
              </button>
            </Link>
          </div>
          <div>
            <Link download href="/resume/Khalid Hasan Sagar -Resume.pdf">
              <button className="relative px-5 py-2 overflow-hidden font-medium text-white bg-[#F4A261] text-center  rounded-md shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Download CV
                </span>
              </button>
            </Link>
            <Link href="#aboutSection">
              <button className="ml-6 relative px-5 py-2 overflow-hidden font-medium text-[#F4A261] bg-none border border-[#F4A261] text-center  rounded-md shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261]  group-hover:h-full ease" />
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261] group-hover:h-full ease" />
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F4A261]  opacity-0 group-hover:opacity-100" />
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white hover:font-medium ease">
                  About Me
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            className="border-2 border-white rounded-full rounded-bl-2xl lg:w-[500px] lg:h-full hover:opacity-80 transition-all duration-300 hover:border-[#F4A261] scale-in-hor-right"
            alt=""
            src="/images/mypic.jpg"
            width={200}
            height={200}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
