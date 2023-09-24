import React from "react";

function ContactPage() {
  return (
    <>
      <section id="contactSection" className="text-white relative">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="font-medium text-4xl text-white tracking-wide text-center pb-8">
            Connect With Me
          </h1>
          <div className="lg:w-1/2 md:w-2/3 mx-auto border border-white p-10 rounded-lg">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full mt-10">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-lg text-white"
                  >
                    Name
                  </label>
                  <input
                    id="message"
                    name="message"
                    className="w-full bg-white text-black outline-none pl-5 rounded border border-gray-300 h-10 text-base"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-lg text-white"
                  >
                    Email
                  </label>
                  <input
                    id="message"
                    name="message"
                    className="w-full bg-white text-black outline-none pl-5 rounded border border-gray-300 h-10 text-base"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-lg text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white text-black outline-none pl-5 rounded border border-gray-300 h-20 text-base"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mx-auto pt-5">
                <button className="ml-6 relative px-5 py-2 overflow-hidden font-medium text-[#F4A261] bg-none border border-[#F4A261] text-center  rounded-md shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261]  group-hover:h-full ease" />
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261] group-hover:h-full ease" />
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F4A261]  opacity-0 group-hover:opacity-100" />
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-white hover:font-medium ease">
                    Send Message
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
