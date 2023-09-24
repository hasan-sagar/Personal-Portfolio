import Image from "next/image";

function SkillsPage() {
  return (
    // <div className="px-8 py-10 text-white h-full">
    //   <h1 className="text-center text-4xl font-semibold">Technical Skills</h1>
    //   <h1 className="text-center text-2xl font-medium text-[#F4A261]">
    //     Frameworks
    //   </h1>
    //   <div className="flex flex-row justify-center items-center gap-10">
    //     <div>
    //       <Image alt="" src="/images/react.svg" width={50} height={50} />
    //       <p>ReactJs</p>
    //     </div>
    //     <div>
    //       <Image alt="" src="/images/next.svg" width={50} height={50} />
    //       <p>NextJs</p>
    //     </div>
    //     <div>
    //       <Image alt="" src="/images/express.svg" width={50} height={50} />
    //       <p>ExpressJs</p>
    //     </div>
    //     <Image alt="" src="/images/nestjs.svg" width={50} height={50} />
    //     <Image alt="" src="/images/nodejs.svg" width={50} height={50} />
    //   </div>
    // </div>
    <section className="py-20">
      <section id="skillSetion" className="px-8 text-white h-full">
        <h1 className="text-center text-4xl font-medium text-white tracking-widest">
          Technical Skills
        </h1>
        <h1 className="text-center text-2xl font-medium text-[#F4A261] py-5 tracking-wide">
          Frameworks
        </h1>
        <div className="max-w-2xl mx-auto flex justify-center items-center border border-white p-5 rounded-lg hover:bg-[#F4A261] transition-all duration-300">
          <div className="flex -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/react.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/next.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/express.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/nestjs.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/nodejs.svg" width={50} height={50} />
            </div>
          </div>
        </div>
        {/* database */}
      </section>
      <section className="px-8 text-white h-full">
        <h1 className="text-center text-2xl font-medium text-[#F4A261] py-5 tracking-wide">
          Database
        </h1>
        <div className="max-w-2xl mx-auto flex justify-center items-center border border-white p-5 rounded-lg gap-5  hover:bg-[#F4A261] transition-all duration-300">
          <Image alt="" src="/images/mongo.svg" width={50} height={50} />
          <Image alt="" src="/images/postgre.svg" width={50} height={50} />
        </div>
      </section>
      <section className="px-8 text-white h-full">
        <h1 className="text-center text-2xl font-medium text-[#F4A261] py-5 tracking-wide">
          Tools
        </h1>
        <div className="max-w-2xl mx-auto flex justify-center items-center border border-white p-5 rounded-lg  hover:bg-[#F4A261] transition-all duration-300">
          <div className="flex -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/vscode.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/figma.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/postman.svg" width={50} height={50} />
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <Image alt="" src="/images/github.svg" width={50} height={50} />
            </div>
          </div>
        </div>
        {/* database */}
      </section>
    </section>
  );
}

export default SkillsPage;
