import Image from "next/image";
import React from "react";

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

      <div className="bg-[#ded263] dark:bg-[#28447b] w-full py-4 lg:pr-10 text-xl md:text-3xl font-bold text-center">
        Neuro Science
      </div>

      <footer className="w-full py-4 lg:pr-10 bg-primary text-xl md:text-3xl font-bold text-center">
        <p>Copyright © 2025 Rupesh Chillale</p>
      </footer>
    </div>
  );
};

export default Home;
