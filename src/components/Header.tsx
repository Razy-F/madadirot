import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="max-w-[1256px] m-auto p-10">      
        <nav className="flex justify-between">
            <Link className="font-bold text-sm uppercase" href="/">
            logo
            </Link>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              height={24}
              width={24}
            />
        </nav>      
    </header>
  );
};

export default Header;
