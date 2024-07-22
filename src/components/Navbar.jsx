"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaAt, FaLinkedin, FaFacebook } from "react-icons/fa";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgba(255, 255, 255)" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "rgba(255, 255, 255)" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="py-6 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <nav className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </nav>

      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="bg-black text-sm rounded-md p-1 font-semibold flex items-center justify-center">
          <span className="text-white m-1">Free</span>
          <span className="w-12 h-8 bg-white rounded-md text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/SerhiiDubovets">
          <FaGithub className="w-6 h-6" />
        </Link>
        <Link href="mailto:sergio.dubovets@gmail.com">
          <FaAt className="w-6 h-6 fill-green-600" />
        </Link>
        <Link href="https://www.linkedin.com/in/serhii-dubovets/">
          <FaLinkedin className="w-6 h-6 fill-blue-600" />
        </Link>
        <Link href="https://uk-ua.facebook.com/">
          <FaFacebook className="w-6 h-6 fill-blue-400" />
        </Link>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={handleOpenMenu}>
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1 rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1 rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="bg-black w-10 h-1 rounded origin-left"></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-[60]">
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
