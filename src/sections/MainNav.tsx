"use client";

import { CutCornerButton } from "@/components/CutCornerButton";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    href: "/",
    scrollTo: "home",
  },
  {
    title: "About Me",
    href: "/about",
    scrollTo: "about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    scrollTo: "projects",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
    scrollTo: "contact",
  },
];

export const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex justify-center items-center sticky top-3 py-4 z-10">
        <div className="container">
          <div className="flex justify-between items-center bg-primary-lightRed/20 rounded-full p-0.5 md:p-2 backdrop-blur-sm outline outline-2 -outline-offset-2 outline-primary-darkSlateGray/20">
            {/* LOGO */}
            <div>
              <button className="inline-flex gap-0.5 uppercase text-primary-brightCoral text-base md:text-xl font-sans font-extrabold bg-gradient-to-r from-red-300 to-primary-foreground text-transparent bg-clip-text">
                <span>@</span>
                <span>Chidera</span>
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex gap-8 lg:gap-16">
                {/* NAVIGATION LINKS */}
                <nav className="hidden md:flex items-center gap-3 lg:gap-5">
                  {navLinks.map(({ title, href, scrollTo }) => (
                    <a
                      key={title}
                      href={href}
                      className="text-primary-brightCoral font-medium font-sans text-xs lg:text-base tracking-tighter"
                      onClick={(e) => {
                        e.preventDefault();
                        if (scrollTo) {
                          scrollToSection(scrollTo);
                        } else {
                          window.location.href = href;
                        }
                      }}
                    >
                      {title}
                    </a>
                  ))}
                </nav>
                <div className="md:mr-2 lg:mr-4">
                  <CutCornerButton>Get in touch</CutCornerButton>
                </div>
              </div>
              {/* HAMBURGER */}
              <div
                className="size-10 relative block md:hidden"
                onClick={() => setIsOpen((curr) => !curr)}
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-primary-foreground -translate-y-1 transition-all duration-500",
                      isOpen && "translate-y-0 rotate-45"
                    )}
                  ></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-5 h-0.5 bg-primary-foreground translate-y-1 transition-all duration-500",
                      isOpen && "translate-y-0 -rotate-45"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bg-primary-darkRed size-full top-0 left-0 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-2 rounded-md bg-primary-lightRed/50 mt-24 z-0">
              <div className="flex h-full justify-center items-center">
                <nav className="flex flex-col items-center gap-12">
                  {navLinks.map(({ title, href, scrollTo }, index) => (
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "linear",
                        delay: 0.25 * index,
                      }}
                      key={title}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (scrollTo) {
                          scrollToSection(scrollTo);
                        } else {
                          window.location.href = href;
                        }
                      }}
                    >
                      <span className="text-base font-sans tracking-tight text-primary-brightCoral hover:text-primary-orangeBrown transition duration-300">
                        {title}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
