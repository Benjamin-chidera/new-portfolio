"use client";

import { Code, Edit3, House, Mail, Moon, Sun, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const NavComponent = () => {
  const [toggle, setToggle] = useState("light");

  const nav = [
    {
      title: "Home",
      icon: <House />,
      link: "/",
    },

    {
      title: "About",
      icon: <User />,
      link: "/about",
    },
    {
      title: "Projects",
      icon: <Code />,
      link: "/projects",
    },
    {
      title: "Blog",
      icon: <Edit3 />,
      link: "/blog",
    },
    {
      title: "Contact",
      icon: <Mail />,
      link: "/contact",
    },
  ];

  //   this is for the toggle button (dark/light mode)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setToggle(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = toggle === "light" ? "dark" : "light";
    setToggle(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <main>
      <nav>
        <aside className=" bg-blue-900 h-[350px] w-[50px] items-center justify-center flex flex-col rounded-full text-white">
          <ul className=" space-y-8">
            {nav.map((item, i) => (
              <li key={i} className=" relative group">
                <Link href={item.link}>{item.icon}</Link>

                <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-blue-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          <div className=" relative group">
            <button className=" mt-7 cursor-pointer" onClick={handleToggle}>
              {toggle == "dark" ? <Sun /> : <Moon />}
            </button>

            <span className="absolute left-10 top-1/2 mt-3 -translate-y-1/2 bg-blue-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              Mode
            </span>
          </div>
        </aside>
      </nav>
    </main>
  );
};
