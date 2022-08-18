import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-green-700">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Peter Chin Meng Meng</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions. Contact
                  me and let's communicate.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.facebook.com/peter.mengmeng/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/hisnameispeter/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>
                  <a href="https://wa.me/60182046863" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaWhatsapp />
                    </div>
                  </a>
                  <a href="https://github.com/peterchinmm" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
