import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/shadcn/ui/avatar";
import Education from "./components/Education";
import EducationV2 from "./components/EducationV2";

const Home = () => {
  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <Image
          src={"/the_starry_night.jpg"}
          alt="Background"
          fill
          className="object-cover opacity-50 dark:opacity-40 z-0"
        />
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-24 lg:pr-10 gap-10 flex-wrap">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold whitespace-nowrap">
            Rupesh Chillale
          </h1>
          <div className="flex flex-col items-center justify-center flex-wrap gap-4">
            <h2 className="text-lg md:text-2xl font-bold">
              Assistant Professor, Ahmedabad University
            </h2>
            <h2 className="md:text-2xl font-bold">
              rupeshchillale@ahduni.edu.in
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-[#ded263] dark:bg-[#28447b] flex flex-col gap-3 w-full py-4 lg:pr-10 text-center">
        <h2 className="text-xl md:text-3xl font-bold">About Me</h2>
        <p className="text-lg leading-relaxed px-10 sm:px-16 md:px-24 lg:px-48">
          I am <strong>Dr. Rupesh Kumar Chillale</strong>, a neuroscientist
          exploring how the brain processes sound — including speech and music —
          using{" "}
          <strong>EEG, electrophysiology, and computational modeling</strong>.
          My work blends human and animal studies to uncover how the brain
          interprets sound and transforms perception into behavior.
        </p>
      </div>

      <div className="hidden xl:block">
        <Education />
      </div>

      <div className="block xl:hidden">
        <EducationV2 />
      </div>

      <footer className="w-full py-4 lg:pr-10 bg-primary md:text-xl lg:text-2xl font-bold text-center">
        <p>Copyright © 2025 Rupesh Chillale</p>
      </footer>
    </div>
  );
};

export default Home;
