"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close navbar automatically when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-90 shadow-md backdrop-blur-md z-50">
  <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
    {/* Logo on the left */}
    <Link href="/" className="flex items-center">
      <img
        src="/logo.webp"
        alt="Deep Kardani Logo"
        className="h-8 w-auto md:h-10 object-contain"
      />
    </Link>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Navigation Options (Right-Aligned) */}
    <ul
  className={`fixed top-16 left-0 -mt-4 md:mt-0 w-full bg-[#0d1224] bg-opacity-90 flex flex-col items-start space-y-1 p-4 transition-transform duration-300 ease-in-out 
    ${isOpen ? "block" : "hidden"} md:relative md:top-0 md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-5 md:bg-transparent md:p-0`}
>
  {[
    { name: "ABOUT", link: "/#about" },
    { name: "SKILLS", link: "/#skills" },
    { name: "PROJECTS", link: "/#projects" },
    { name: "EDUCATION", link: "/#education" },
    { name: "CERTIFICATE", link: "/#experience" },
    { name: "CONTACT", link: "/#contact" },
  ].map(({ name, link }) => (
    <li key={name}>
      <Link
        onClick={() => setIsOpen(false)}
        className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
        href={link}
      >
        {name}
      </Link>
    </li>
  ))}
</ul>

  </div>
</nav>

    // <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-90 shadow-md backdrop-blur-md z-50">
    //   <div className="container mx-auto flex items-center justify-between px-4 py-2 md:py-3">
    //     {/* Logo on the left */}
    //     <Link href="/" className="flex items-center">
    //       <img
    //         src="/logo.webp"
    //         alt="Deep Kardani Logo"
    //         className="h-8 w-auto md:h-10 object-contain"
    //       />
    //     </Link>

    //     {/* Mobile Menu Button */}
    //     <div className="md:hidden">
    //       <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
    //         {isOpen ? <X size={24} /> : <Menu size={24} />}
    //       </button>
    //     </div>

    //     {/* Navigation Options (Right-Aligned) */}
    //     <ul
    //       className={`fixed top-16 pt-5 left-0 w-full bg-[#0d1224] -mt-4 bg-opacity-90 flex flex-col items-start space-y-1 p-4 transition-transform duration-300 ease-in-out transform ${
    //         isOpen ? "h-auto opacity-100 py-0" : "h-0 opacity-0 md:h-auto md:opacity-100"
    //       } md:relative md:top-0 md:w-auto md:flex-row md:space-y-0 md:space-x-5 md:bg-transparent md:p-0 md:translate-y-0`}
    //     >
        
    //       <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
    //            <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
    //          </Link>
    //        </li>
    //        <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
    //        </li>
    //        <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
    //        </li>
    //        <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
    //        </li>
    //         <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CERTIFICATE</div></Link>
    //        </li>
    //         <li>
    //          <Link onClick={() => setIsOpen(false)} className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div></Link>
    //        </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;


