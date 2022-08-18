import Image from "next/image";
import Link from "next/link";
import React from "react";
import passageImg from "../public/assets/passageApp.jpg";

const Projects = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-green-700">
          Projects
        </p>
        <h2 className="py-4">What I've Built (so far) </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-green-900 to-green-600">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={passageImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Passage Chat App
              </h3>
              <p className="pb-4 pt-2 text-white text-center">React JS</p>
              <a href="https://passage-chat.netlify.app/" target="_blank">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  View App
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
