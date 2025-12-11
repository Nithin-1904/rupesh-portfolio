import Image from "next/image";
import React from "react";
import PageContainer from "~/shadcn/custom/PageContainer";
import { Card, CardContent } from "~/shadcn/ui/card";
import { RESEARCHERS } from "./components/researchers";

const People = () => {
  return (
    <PageContainer className="px-5">
      {/* Rupesh Kumar Chillale Card */}
      <Card className="w-full">
        <CardContent>
          <div className="flex flex-col xl:flex-row gap-2 xl:gap-5 items-center">
            <Image
              src="/headshot1.jpg"
              alt="Head-Shot"
              width={400}
              height={400}
              className="rounded-md "
            />
            <div className="flex flex-col items-center xl:items-start gap-5 xl:gap-7 p-5">
              <h1 className="xl:text-3xl text-2xl font-bold text-primary">
                Rupesh Kumar Chillale
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-semibold">Education</h3>
                  <ul className="list-disc lg:text-md space-y-1.5 pl-5 xl:pl-7">
                    <li>
                      <span className="font-medium">
                        Ph.D. — Computational Neuroscience
                      </span>
                      , Jawaharlal Nehru University, New Delhi, India
                      (2010–2015)
                    </li>
                    <li>
                      <span className="font-medium">M.Sc. — Physics</span>,
                      Jawaharlal Nehru University, New Delhi, India (2005–2007)
                    </li>
                    <li>
                      <span className="font-medium">
                        B.Sc. — Mathematics, Physics & Chemistry
                      </span>
                      , Sri Krishna Devraya University, India (2001–2004)
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-semibold">
                    Professional Experience
                  </h3>
                  <ul className="list-disc lg:text-md space-y-1.5 pl-5 xl:pl-7">
                    <li>
                      <span className="font-medium">Assistant Professor</span>,
                      Ahemdabad University, India (2025–present)
                    </li>
                    <li>
                      <span className="font-medium">
                        Assistant Research Scientist
                      </span>
                      , University of Maryland College Park, Maryland, USA
                      (2021–2025)
                    </li>
                    <li>
                      <span className="font-medium">Senior Postdoc</span>, École
                      Normale Supérieure, Paris, France (2019–2021)
                    </li>
                    <li>
                      <span className="font-medium">Postdoctoral Fellow</span>,
                      École Normale Supérieure, Paris, France (2015–2019)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* Others Card */}
        {Object.entries(RESEARCHERS).map(([_, researcher]) => (
          <Card key={_}>
            <CardContent>
              <div className="flex flex-col items-center gap-2">
                <Image
                  src={researcher.imageUrl}
                  alt={researcher.name}
                  width={400}
                  height={400}
                  className="rounded-md"
                />
                <h1 className="xl:text-3xl text-2xl font-bold text-primary">
                  {researcher.name}
                </h1>
                <p className="px-4 xl:text-lg">{researcher.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};

export default People;
