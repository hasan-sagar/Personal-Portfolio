import React from "react";
import TopbarMenus from "./TopbarMenus";
import Link from "next/link";

function Topbar() {
  return (
    <div className="text-white flex flex-row justify-between items-center py-10 px-8">
      <div>
        <h1 className="text-2xl logo-font text-white">Portfolio</h1>
      </div>
      <div>
        <nav>
          <ul className=" lex-row justify-between items-center gap-8 font-medium text-xl hidden md:flex ">
            <li className="hover:text-[#F4A261] transition-colors duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#F4A261] transition-colors duration-500">
              <Link href="#aboutSection">About Me</Link>
            </li>
            <li className="hover:text-[#F4A261] transition-colors duration-500">
              <Link href="#skillSetion">Skills</Link>
            </li>
            <li className="hover:text-[#F4A261] transition-colors duration-500">
              <Link href="#projectSection">Projects</Link>
            </li>
            <li className="hover:text-[#F4A261] transition-colors duration-500">
              <Link href="#contactSection">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <TopbarMenus />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
