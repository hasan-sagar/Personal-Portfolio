import Image from "next/image";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <section id="projectSection" className="w-full h-full pt-20 pb-10">
      <div className="text-center">
        <h1 className="font-medium text-4xl text-white tracking-wide">
          Projects
        </h1>
      </div>
      <section>
        <div className="container py-5 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-8 shadow-2xl rounded-lg p-10 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-all duration-300">
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover object-center h-full w-full"
                  src="/images/chat-ss.jpg"
                />
              </div>
              <h2 className="title-font text-2xl font-semibold text-[#F4A261] mt-6 mb-3">
                Chat Application
              </h2>
              <p className="leading-relaxed text-lg text-white">
                An application that enables users to talk to friends and groups
                in real time.built responsive layouts and websites dynamic by
                using ReactJs, Tailwindcss, and Context Api. Json Web Token was
                used for unique authentication. applied api to handle chat data
                using ExpressJs and MongoDB. incorporated the Socket.io
                real-time message sending feature. Users can chat, look up
                friends, and send group messages.
              </p>
              <div className="mt-5">
                <Link
                  target="_blank"
                  href={"https://chat-app-nine-theta.vercel.app"}
                >
                  <button className="relative px-5 py-2 overflow-hidden font-medium text-white bg-[#F4A261] text-center  rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Live
                    </span>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/hasan-sagar/Chat-app-client"
                >
                  <button className="ml-6 relative px-5 py-2 overflow-hidden font-medium text-[#F4A261] bg-none border border-[#F4A261] text-center  rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261]  group-hover:h-full ease" />
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261] group-hover:h-full ease" />
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F4A261]  opacity-0 group-hover:opacity-100" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white hover:font-medium ease">
                      Source Code Client
                    </span>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/hasan-sagar/Chat-App-Server"
                >
                  <button className="ml-6 relative px-5 py-2 overflow-hidden font-medium text-[#F4A261] bg-none border border-[#F4A261] text-center  rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261]  group-hover:h-full ease" />
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261] group-hover:h-full ease" />
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F4A261]  opacity-0 group-hover:opacity-100" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white hover:font-medium ease">
                      Source Code Server
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-8 shadow-2xl rounded-lg p-10 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-all duration-300">
              <div className="rounded-lg h-96 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  alt=""
                  className="object-cover object-center h-full w-full"
                  src="/images/tailor-ss.png"
                />
              </div>
              <h2 className="title-font text-2xl font-semibold text-[#F4A261] mt-6 mb-3">
                Tailor Shop Managment System
              </h2>
              <p className="leading-relaxed text-lg text-white">
                Laravel and MySQL were used in the creation of this system. An
                application to operate tailor shops. According to categories,
                users can add and list their products and services in this
                application. The user authentication was handled using the
                Breeze package. The measurements and information for the
                customer are provided in the customer area. They could also
                mention their cost and level of service. A rapid order can be
                created on the point of sale page. The user may sell their
                service on this page. Orders and invoices can be checked by
                users. Change the order's status and assign it to an employee.
                Customer invoices that are printable.
              </p>
              <div className="mt-5">
                <Link
                  target="_blank"
                  href="https://www.loom.com/share/6db4738a49c6453a86c3d7df3ec96621?sid=3a58b055-98eb-4e94-823e-4e66e43544b1"
                >
                  <button className="relative px-5 py-2 overflow-hidden font-medium text-white bg-[#F4A261] text-center  rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease" />
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                      Live
                    </span>
                  </button>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/hasan-sagar/technolab-tailor-shop-managment"
                >
                  <button className="ml-6 relative px-5 py-2 overflow-hidden font-medium text-[#F4A261] bg-none border border-[#F4A261] text-center  rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease" />
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261]  group-hover:h-full ease" />
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-[#F4A261] group-hover:h-full ease" />
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#F4A261]  opacity-0 group-hover:opacity-100" />
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-white hover:font-medium ease">
                      Source Code
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Projects;
