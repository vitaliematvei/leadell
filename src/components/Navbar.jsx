import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Crm", href: "/crm" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <section className="max-w-[1512px] mx-auto p-4 text-white bg-black b-0">
      <div className="flex justify-between items-center mx-3">
        <a
          href="/"
          className="text-2xl font-bold uppercase font-NicoMoji hover:text-gray-400"
        >
          Leadell
        </a>

        <nav className="space-x-4 hidden md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-Matter hover:text-gray-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden block focus:outline-none hover:text-gray-400"
          onClick={toggleMenu}
        >
          {isOpen ? null : <HiMenuAlt4 size={25} />}
        </button>
      </div>

      <nav
        className={`fixed top-0 right-0 p-4 transition duration-300 ease-in-out z-20 ${
          isOpen ? "block md:hidden" : "hidden"
        }`}
      >
        <button
          className="absolute right-4 focus:outline-none hover:text-gray-400"
          onClick={toggleMenu}
        >
          <IoCloseSharp size={25} />
        </button>

        <ul className="mt-14 space-y-4 block md:hidden fixed top-0 right-0 bg-black w-[50%]  h-screen">
          {navigationItems.map((item) => (
            <li key={item.label} className="p-2 hover:text-gray-400">
              <a href={item.href} className="block text-lg font-Matter">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
