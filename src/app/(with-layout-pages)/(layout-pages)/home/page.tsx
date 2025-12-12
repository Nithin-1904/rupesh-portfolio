import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={"/the_starry_night.jpg"}
          alt="Background"
          fill
          className="object-cover z-0"
        />
      </div>

      <div className="flex flex-col gap-3 w-full py-4 lg:pr-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Auditory & System Neuroscience Lab
        </h1>
        <h2 className="text-lg md:text-2xl font-bold">Ahmedabad University</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 md:items-start items-center p-10">
        <Image
          src={"/picture.jpg"}
          alt="Headshot"
          height={250}
          width={250}
          className="object-cover rounded-md"
        />

        <p className="text-lg text-center md:text-start">
          I am an assistant professor in the{" "}
          <a
            href="https://ahduni.edu.in/academics/schools-centres/school-of-arts-and-sciences/"
            target="_blank"
            className="underline"
          >
            School of Arts and Sciences
          </a>{" "}
          at{" "}
          <a
            href="https://www.ahmedabaduniversity.edu.in/"
            target="_blank"
            className="underline"
          >
            Ahmedabad University
          </a>
          . My lab is interested in how the brain learns, predicts, and
          processes complex auditory and multimodal signals. My work focuses on
          the neural mechanisms underlying speech, music, and movement
          perception, and how these sensory experiences shape cognition and
          behaviour. I use EEG, micro-ECoG, behavioural paradigms, and
          computational modelling to study how the brain transforms sound and
          action into meaningful representations.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row gap-5 justify-center lg:justify-end overflow-hidden items-center p-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.608671241223!2d72.5543807!3d23.0381364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848d5f86040f%3A0x7a0cc8b624851642!2sAhmedabad%20University!5e0!3m2!1sen!2sin!4v1765472639897!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border md:w-[400px] md:h-[200px] border-foreground"
        ></iframe>
        <Image
          src={"/logo.jpg"}
          alt="Headshot"
          height={60}
          width={60}
          className="lg:absolute top-28 left-[48%] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default Home;
