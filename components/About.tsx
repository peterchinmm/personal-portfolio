import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-gray-50"
    >
      <div className="max-w-[1240px] m-auto">
        <p className="uppercase text-xl tracking-widest text-green-700">
          About
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ fallback: true }}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
        >
          <h2 className="py-4">Who I Am</h2>
        </motion.div>
        <p className="py-2 text-gray-600">
          I am not just your normal everyday developer.
        </p>
        <p className="py-2 text-gray-600">
          Many developers out there had to learn first before getting a job.
          Well, I experienced the beauty of web app programming instantly while
          working as a junior web app developer. I was in hooked by how mere
          letters and words can form such mind-blowing websites that I wish I
          learned all of this sooner.
        </p>
        <p className="py-2 text-gray-600">
          I&apos;m currently having my degree on Data Science at Universiti
          Malaysia Sabah (UMS) while working as a full-stack developer under
          Neative, building and maintaining projects with React JS, Express, and
          learning new technologies.
        </p>
        <Link href="/#projects">
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default About;
