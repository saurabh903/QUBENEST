import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const Navlinks = [
  {
    id: 1,
    name: "Enquiry",
    link: "/#cars",
  },
  {
    id: 2,
    name: "Find My Home",
    link: "/#about",
  },
  {
    id: 3,
    name: "Help",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="relative z-10 shadow-md w-full bg-gray-100/[.03] dark:text-white duration-300"
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span>
              <img src="src/assets/logo.png" className="w-[200px]" alt="Logo" />
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="ml-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors duration-300">
              New Button
            </button>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden">
            {/* dark mode */}
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
