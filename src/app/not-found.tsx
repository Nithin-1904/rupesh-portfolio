import React from "react";
import Link from "next/link";

import { Home } from "lucide-react";

import { Button } from "~/shadcn/ui/button";

const Custom404: React.FC = () => {
  return (
    <div className="bg-background flex items-center justify-center">
      <div className="mt-56 text-center">
        <h1 className="text-primary text-9xl font-bold">404</h1>
        <h4 className="text-primary mt-4 text-3xl font-semibold">Oops!</h4>
        <p className="text-l text-muted-foreground mt-4">
          Looks like you are lost.
        </p>
        <Link href={"/home"}>
          <Button className="mt-5">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
