import Image from "next/image";
import { AiFillMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

function AboutPage() {
  return (
    <section id="aboutSection" className="px-8 text-white h-full">
      <div className="flex lg:flex-row md:flex-col flex-col justify-between items-center">
        <div className="flex-col justify-center items-center md:items-center hidden lg:flex lg:pt-10">
          <Image alt="" src="/images/animation.gif" width={500} height={500} />
        </div>
        <div className="flex flex-col justify-center gap-2 max-w-3xl">
          <h1 className="font-medium text-4xl text-center lg:text-start tracking-widest border-b">
            About Me
          </h1>
          <h1 className="font-semibold text-4xl text-center lg:text-start mt-10 text-[#F4A261]">
            Khalid Hasan Sagar
          </h1>
          <div className="flex flex-col gap-2 items-center lg:items-start hover:text-[#F4A261] transition-all duration-300 cursor-pointer">
            <p className="inline-flex gap-2 text-xl">
              <AiFillMail size={22} />
              khsagar0512@gmail.com
            </p>
            <p className="inline-flex gap-2 text-xl">
              <AiOutlinePhone size={22} />
              +88-01846970209
            </p>
          </div>

          <p className="py-5 font-normal text-[24px] text-center lg:text-start hover:text-[#F4A261] transition-all duration-300 cursor-pointer">
            Hi, I just received my bachelor's degree from Daffodil International
            University in Bangladesh. Gaming and technologyboth attracts me.
            enjoys reading articles and playing the guitar. I'm now looking for
            an entry-level opportunity to start mysoftware engineering career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
