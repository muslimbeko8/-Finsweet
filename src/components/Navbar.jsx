import React from "react";

export default function Navbar() {
  return (
    <nav className=" bg-[#1B1C31] text-white py-4 px-8 border-b-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <span>{"{ "}</span>Finsweet
        </div>

        <ul className="flex gap-8 text-gray-400 ">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <button className="border-2 text-white px-6 py-2 rounded-full">
          Contact us
        </button>
      </div>
    </nav>
  );
}
