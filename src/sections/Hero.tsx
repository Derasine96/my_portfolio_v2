import { HeroOrbitEffect } from "../components/Hero/HeroOrbitEffect";
import profilePicture from "@/assets/images/profile-picture.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <section className="py-16 relative z-0 overflow-x-clip">
      <HeroOrbitEffect />
      <div className="container">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={profilePicture}
            alt="Smile Memoji"
            className="size-14 md:size-20 rounded-full z-10 "
          />
          <div className="bg-gradient-to-r from-primary-lightRed to-primary-darkRed border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="size-2.5 rounded-full bg-green-500 relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm md:text-base lg:text-lg font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-center text-primary-brightCoral mt-8 bg-gradient-to-r from-red-400 to-primary-lightRed text-transparent bg-clip-text">
            HEY THERE!, IT’S CHIDERA{" "}
          </h1>
          <h2 className="font-serif text-primary-offWhite text-xl md:text-4xl text-center tracking-tighter">
            Bringing Ideas to Life with Code and Creativity
          </h2>
          <p className="flex flex-col gap-1.5 mt-2 text-sm md:text-lg text-center text-primary-offWhite">
            <span>
              Welcome to my corner, I'm Chidera, a passionate frontend developer
              and aspiring UI/UX designer dedicated to building beautiful and
              functional web applications.
            </span>
            <span className="font-semibold">Let&apos;s discuss your next project.</span>
          </p>
        </div>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-2 lg:px-4 h-10 lg:h-12 rounded-xl">
            <span className="font-medium lg:font-bold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-primary-offWhite text-primary-darkSlateGray h-12 px-2.5 lg:px-5 rounded-2xl">
            <span className="font-semibold lg:font-bold">&#128075; Let&apos;s connect</span>
          </button>
        </div>
      </div>
    </section>
  );
};
