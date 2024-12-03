import React from "react";
import Hero from "./Hero";
import Logo from "../assets/Logo.svg";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: "fa-house",
    subLinks: [
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
    ],
  },
  {
    icon: "fa-circle-info",
    name: "About us",
    href: "/about",
  },
  {
    icon: "fa-feather",
    name: "Features",
    href: "/features",
    subLinks: [
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
    ],
  },
  {
    icon: "fa-hand-holding-dollar",
    name: "Pricing",
    href: "/pricing",
    subLinks: [
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
    ],
  },
  {
    icon: "fa-circle-question",
    name: "FAQ",
    href: "/faq",
    subLinks: [
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
    ],
  },
  {
    icon: "fa-user-tie",
    name: "Blog",
    href: "/blog",
    subLinks: [
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
      {
        name: "Sublink1",
        href: "/",
      },
    ],
  },
];

export default function Navbar() {
  return (
    <header className="bg-[#1C1E53]">
      <nav className="bg-primary">
        <div className="container ps-8 max-lg:py-4 relative flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div className="flex gap-10 items-center">
            <ul className="flex justify-between max-lg:fixed z-50 bottom-0 start-0 end-0 max-lg:w-full max-lg:bg-primary max-lg:justify-around bg-[#1C1E53] max-lg:py-5 text-white">
              {navLinks.map((l) => (
                <li key={l.name} className="link">
                  <a
                    className="mx-5 hover:underline my-7 block max-lg:hidden"
                    href={l.href}
                  >
                    {l.name}
                  </a>
                  <a href={l.href} className="text-2xl lg:hidden">
                    <i className={`fa ${l.icon}`}></i>
                  </a>
                  {l.subLinks && (
                    <ul className="sublink pb-7 absolute w-full top-full grid-cols-4 start-0 bg-primary hidden">
                      {l.subLinks.map((s, i) => (
                        <li key={i} className="text-center">
                          <a
                            className="my-1 hover:underline inline-block"
                            href={s.href}
                          >
                            {s.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="border  max-sm:text-sm max-sm:px-7 rounded-full text-white border-slate-200 px-10 py-3 hover:bg-white hover:text-primary transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
}
