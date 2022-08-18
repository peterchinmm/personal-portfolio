import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import htmlLogo from "../public/assets/htmlLogo.png";
import cssLogo from "../public/assets/cssLogo.png";
import javascriptLogo from "../public/assets/javascriptLogo.png";
import reactLogo from "../public/assets/reactLogo.png";
import mongoLogo from "../public/assets/mongoLogo.png";
import githubLogo from "../public/assets/githubLogo.png";

const Skills = () => {
  const skillList = [
    { url: htmlLogo, name: "HTML" },
    { url: cssLogo, name: "CSS" },
    { url: javascriptLogo, name: "Javascript" },
    { url: reactLogo, name: "React" },
    { url: mongoLogo, name: "MongoDB" },
    { url: githubLogo, name: "Github" },
  ];

  const displaySkill = (url: StaticImageData, name: string, delay: number) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ fallback: true }}
        variants={{
          hidden: {
            scale: 0.5,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay,
            },
          },
        }}
      >
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src={url} width="64px" height="64px" alt="/" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>{name}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-green-700">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillList.map(({ url, name }, i) => {
            i = (2 * i + 2) / 10;
            return displaySkill(url, name, i);
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
