"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down → hide navbar
      } else {
        setShow(true); // scrolling up → show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const links = [
    { name: "About Us", href: "/" },
    { name: "Auxo Industries", href: "/auxo-industries" },
    { name: "Products & Customers", href: "/products-customers" },
    { name: "Posts & News", href: "/posts-news" },
    { name: "Our People", href: "/career" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: show ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-sm "
      >
        <div className="flex items-center justify-between px-8 py-3 max-w-8xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/auxo-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="h-20 w-20 object-contain"
            />
            <span className="sm:text-[30px] text-black">AUXO</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-black font-medium text-[20px]">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact-us"
              className="px-6 py-2 rounded-lg bg-[#EB7A2E] sm:block hidden sm:text-[20px] hover:bg-orange-600 text-white font-semibold transition"
            >
              Contact Us
            </Link>
            {/* Hamburger for small screens */}
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-black/50 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 text-white text-xl"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 rounded-lg bg-[#EB7A2E] hover:bg-orange-700 text-white font-semibold transition"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
