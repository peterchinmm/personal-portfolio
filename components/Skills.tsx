import Image from "next/image";
import React from "react";

const Skills = () => {
  const skillList = [
    { url: "/../public/assets/htmlLogo.png", name: "HTML" },
    { url: "/../public/assets/cssLogo.png", name: "CSS" },
    { url: "/../public/assets/reactLogo.png", name: "React" },
    { url: "/../public/assets/mongoLogo.png", name: "MongoDB" },
    { url: "/../public/assets/githubLogo.png", name: "Github" },
    { url: "/../public/assets/htmlLogo.png", name: "HTML" },
  ];

  const displaySkill = (url: string, name: string) => {
    return (
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
    );
  };

  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-green-700">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillList.map(({ url, name }) => displaySkill(url, name))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
