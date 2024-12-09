import React from "react";
import { MdOutlineEmail } from "react-icons/md";

import { FaGithub } from "react-icons/fa"


export default function Footer () {
  return (
    <div
      id="Footer"
      className="flex gap-6 justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div >
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:Tawassuljunaid1988@gmail.com?subject=Subject%20Here&body=Hello%2C%20I'd%20like%20to%20...">Send me an Email</a>

        </li>
        
        
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/Erum-Saeed-88" target="_blank">github.com/Erum-Saeed-88</a>
        </li>
      </ul>
    </div>
  );
};