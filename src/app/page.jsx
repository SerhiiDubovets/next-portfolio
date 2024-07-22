"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col gap-1 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain"
            priority={true}
          />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl text-center md:text-6xl font-bold lg:text-start">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="md:text-xl">
            Welcome to my experimental canvas, where innovation and creativity
            converge. This is my portfolio showcases a diverse collection of
            projects that reflect my commitment to excellence.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-black bg-black text-white">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
