import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import Image from "next/image";

const Main = () => {
  return (
    <div className="bg-none w-full h-screen text-center 2xl:bg-[url('../public/assets/profilePic.png')] bg-no-repeat bg-right bg-contain">
      {/* <div className="invisible lg:visible bg-[url('../public/assets/profilePic.png')]">
        <Image
          src="/../public/assets/profilePic.png"
          alt="/"
          width="500"
          height="500"
        />
      </div> */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center 2xl:ml-0">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Welcome
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
                  ease: "easeIn",
                  delay: 0.4,
                },
              },
            }}
          >
            <h1 className="py-4 text-gray-700">
              Hi, I&apos;m <span className="text-green-700">Peter</span>
            </h1>
          </motion.div>
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
                  ease: "easeIn",
                  delay: 0.6,
                },
              },
            }}
          >
            <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          </motion.div>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a self-learning full-stack web developer specializing in
            building amazing digital experiences. I&apos;m currently focused on
            learning back-end technologies while maintaining and building
            front-end web applications. I may not be the best but I do thrive to
            be one someday.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.facebook.com/peter.mengmeng/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebook />
              </div>
            </a>
            <a
              href="https://www.instagram.com/hisnameispeter/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://wa.me/60182046863"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaWhatsapp />
              </div>
            </a>
            <a
              href="https://github.com/peterchinmm"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
