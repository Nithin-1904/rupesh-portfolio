import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/shadcn/ui/avatar";
import { Separator } from "~/shadcn/ui/separator";

const EducationV2 = () => {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center px-4 sm:px-4 md:px-6 lg:px-8 py-16">
      <Avatar className="size-50 md:size-60 lg:size-80 xl:size-100 shadow-xl">
        <AvatarImage
          src="/headshot1.jpg"
          alt="Head-Shot"
          className="object-cover object-left"
        />
        <AvatarFallback>RK</AvatarFallback>
      </Avatar>

      <div className="grid grid-cols-3 gap-y-1 pt-2">
        <div className="grid">
          <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
            <h4 className="text-sm md:text-lg font-semibold">
              Assistant Research Scientist
            </h4>
            <p className="text-muted-foreground text-xs">
              University of Maryland College Park, Maryland, USA (2021-2025)
            </p>
          </div>
          <div></div>
          <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
            <h4 className="text-sm md:text-lg font-semibold">
              Postdoctoral Fellow
            </h4>
            <p className="text-muted-foreground text-xs">
              École Normale Supérieure, Paris, France (2015-2019)
            </p>
          </div>
          <div></div>
          <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
            <h4 className="text-sm md:text-lg font-semibold">
              M.Sc. — Physics
            </h4>
            <p className="text-muted-foreground text-xs">
              Jawaharlal Nehru University, New Delhi (2005–2007)
            </p>
          </div>
        </div>
        {/* <Separator orientation="vertical" /> */}
        <div></div>
      </div>

      {/* <div className="grid grid-cols-2 gap-y-1 pt-2">
        <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">
            Assistant Research Scientist
          </h4>
          <p className="text-muted-foreground text-xs">
            University of Maryland College Park, Maryland, USA (2021-2025)
          </p>
        </div>

        <div></div>
        <div></div>

        <div className="border-r-4 border-l rounded-l-none border-r-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">Senior Postdoc</h4>
          <p className="text-muted-foreground text-xs">
            École Normale Supérieure, Paris, France (2019-2021)
          </p>
        </div>
        <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">
            Postdoctoral Fellow
          </h4>
          <p className="text-muted-foreground text-xs">
            École Normale Supérieure, Paris, France (2015-2019)
          </p>
        </div>

        <div></div>
        <div></div>

        <div className="border-r-4 border-l rounded-l-none border-r-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">
            Ph.D. - Computational Neuroscience
          </h4>
          <p className="text-muted-foreground text-xs">
            Jawaharlal Nehru University, New Delhi (2010–2015)
          </p>
        </div>
        <div className="border-l-4 border-r rounded-r-none border-l-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">M.Sc. — Physics</h4>
          <p className="text-muted-foreground text-xs">
            Jawaharlal Nehru University, New Delhi (2005–2007)
          </p>
        </div>

        <div></div>
        <div></div>

        <div className="border-r-4 border-l rounded-l-none border-r-blue-600 px-4 py-2 bg-card rounded-sm shadow-md">
          <h4 className="text-sm md:text-lg font-semibold">
            B.Sc.- Mathematics, Physics & Chemistry
          </h4>
          <p className="text-muted-foreground text-xs">
            Sri Krishna Devraya University (2001–2004)
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default EducationV2;
