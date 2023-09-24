import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function TopbarMenus() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      {openMenu ? (
        <Image
          alt=""
          src="/images/close.svg"
          width={30}
          height={30}
          onClick={() => setOpenMenu(false)}
        />
      ) : (
        <Image
          alt=""
          src="/images/menu.svg"
          width={30}
          height={30}
          onClick={() => setOpenMenu(true)}
        />
      )}

      {/* responsive menu click */}
      {openMenu && (
        <div className="bg-gray-900 left-0 top-20 w-full h-[calc(100vh-5rem)] px-10 flex flex-col gap-8 items-center justify-center text-xl z-10 absolute font-medium text-white">
          <ul
            onClick={() => setOpenMenu(!openMenu)}
            className="flex flex-col justify-between items-center gap-8 font-medium text-2xl text-neutral-100 "
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#aboutSection">About Me</Link>
            </li>
            <li>
              <Link href="#skillSetion">Skills</Link>
            </li>
            <li>
              <Link href="#projectSection">Projects</Link>
            </li>
            <li>
              <Link href="#contactSection">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopbarMenus;
