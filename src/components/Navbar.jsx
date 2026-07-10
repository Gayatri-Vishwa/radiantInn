import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { HashLink } from "react-router-hash-link";

const navItems = [
  { id: "Home", path: "/#home" },
  { id: "About", path: "/#about" },
  { id: "Services", path: "/#services" },
  { id: "Menu", path: "/#menu" },
  { id: "Gallery", path: "/#gallery" },
  { id: "Contact", path: "/#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinkStyle =
    "uppercase tracking-[2px] text-sm text-stone-200 hover:text-amber-300 transition-all duration-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-4xl font-bold tracking-[6px] text-amber-300">
              PALASA
            </h1>

            <p className="text-xs uppercase tracking-[8px] md:tracking-[8px] text-stone-200">
              Restaurant & Banquet
            </p>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-14">
            {navItems.map((item) => (
              // <a key={item.path} href={item.path} className={navLinkStyle}>
              //   {item.id}
              // </a>
              <HashLink smooth to={item.path} className={navLinkStyle}>
                {item.id}
              </HashLink>
              //      <Link
              //   to={item.path}
              //    smooth="easeInOutQuart"
              //   duration={500}
              //   offset={-96}
              //   spy={true}
              //   onClick={() => setMenuOpen(false)}
              //   activeClass="text-amber-300"
              //   className="uppercase tracking-[2px] text-sm text-stone-200 hover:text-amber-300 transition duration-300 cursor-pointer"
              // >
              //   {item.id}
              // </Link>
            ))}
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose /> : <HiOutlineBars3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-96 py-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              // <a
              //   key={item.path}
              //   href={item.path}
              //   className={navLinkStyle}
              //   onClick={() => setMenuOpen(false)}
              // >
              //   {item.id}
              // </a>
              <HashLink
                smooth
                to={item.path}
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                {item.id}
              </HashLink>
            ))}

            {/* <a
              href="tel:+91XXXXXXXXXX"
              onClick={() => setMenuOpen(false)}
              className="hidden md:block bg-amber-300 text-black px-7 py-3 rounded-full font-semibold hover:bg-amber-200 transition-all duration-300 shadow-lg"
            >
            Call Now
            </a> */}
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
    </nav>
  );
}

export default Navbar;
