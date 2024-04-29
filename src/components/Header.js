import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Import FiMenu and FiX icons

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const [isMenuIcon, setIsMenuIcon] = useState(true); // State for menu icon toggle

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        const scrollY = window.scrollY;
        const opacity = scrollY > 0 ? 0.8 : 1; // Change opacity based on scroll position
        header.style.backgroundColor = `rgba(242,237,233, ${opacity})`;

        // Close the menu when scrolling
        closeMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsMenuIcon(!isMenuIcon); // Toggle menu icon state
    // document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setIsMenuIcon(true);
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: easeInOut }}
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 ${
        menuOpen
          ? "h-screen w-screen flex justify-center pt-40 fixed inset-0 bg-customBg bg-opacity-100"
          : ""
      }`}
    >
      <div className="flex items-center justify-end h-20 px-8">
        {/* Responsive Navbar */}

        {/* Navbar Links */}
        <motion.div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row flex flex-col items-center md:space-y-0 space-y-8 md:space-x-8`}
          style={{ height: "100%" }} // Set height to 100% for full screen menu
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when Home is clicked
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when About is clicked
          >
            About
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when Work is clicked
          >
            Work
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when Projects is clicked
          >
            Projects
          </Link>
          <Link
            to="Defaced"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when Defaced is clicked
          >
            Defaced
          </Link>
          <Link
            to="socials"
            smooth={true}
            duration={500}
            className="cursor-pointer font-medium hover:text-gray-800"
            style={{ fontWeight: 500 }}
            onClick={closeMenu} // Close menu when Social is clicked
          >
            Social
          </Link>
        </motion.div>

        <div className="md:hidden">
          {/* Close Icon */}
          <button
            className="text-gray-800 border-none bg-transparent absolute top-4 right-4"
            onClick={toggleMenu} // Toggle menu on close icon click
          >
            {!isMenuIcon && <FiX className="w-6 h-6 pr-8 pt-3" />}{" "}
            {/* Display close icon when menu is open */}
          </button>
          {/* Hamburger Menu */}
          <button
            className="text-gray-800 border-none bg-transparent"
            onClick={toggleMenu}
          >
            {isMenuIcon ? (
              <FiMenu className="w-6 h-6" />
            ) : (
              <FiX className="w-6 h-6 hidden" />
            )}{" "}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
