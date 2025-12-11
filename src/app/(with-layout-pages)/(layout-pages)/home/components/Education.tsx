import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/shadcn/ui/avatar";

const Education = () => {
  return (
    <div className="relative flex items-center justify-between py-30 md:px-10 lg:px-20 xl:px-20 2x:px-36">
      <div className="lg:w-3/5 xl:w-full space-y-6 text-left">
        <div className="border-l-4 border-blue-600 pl-4 pr-44 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">
            Assistant Research Scientist
          </h4>
          <p className="text-gray-600 text-sm">
            University of Maryland College Park, Maryland, USA (2021-2025)
          </p>
        </div>

        <div className="border-l-4 border-blue-600 pl-4 pr-40 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">Senior Postdoc</h4>
          <p className="text-gray-600 text-sm">
            École Normale Supérieure, Paris, France (2019-2021)
          </p>
        </div>

        <div className="border-l-4 border-blue-600 pl-4 pr-40 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">Postdoctoral Fellow</h4>
          <p className="text-gray-600 text-sm">
            École Normale Supérieure, Paris, France (2015-2019)
          </p>
        </div>
      </div>

      <div className="lg:w-3/5 xl:w-full space-y-6 text-right">
        <div className="border-r-4 border-blue-600 pr-4 pl-40 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">
            Ph.D. — Computational Neuroscience
          </h4>
          <p className="text-gray-600 text-sm">
            Jawaharlal Nehru University, New Delhi (2010–2015)
          </p>
        </div>

        <div className="border-r-4 border-blue-600 pr-4 pl-40 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">M.Sc. — Physics</h4>
          <p className="text-gray-600 text-sm">
            Jawaharlal Nehru University, New Delhi (2005–2007)
          </p>
        </div>

        <div className="border-r-4 border-blue-600 pr-4 pl-40 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-lg font-semibold">
            B.Sc. — Mathematics, Physics & Chemistry
          </h4>
          <p className="text-gray-600 text-sm">
            Sri Krishna Devraya University (2001–2004)
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 lg:top-22 xl:top-10">
        <Avatar className="md:size-60 lg:size-80 xl:size-100 shadow-xl">
          <AvatarImage
            src="/headshot1.jpg"
            alt="Head-Shot"
            className="object-cover object-left"
          />
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Education;
