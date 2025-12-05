import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/shadcn/ui/accordion";
import { Card, CardContent } from "~/shadcn/ui/card";

import { cn } from "~/lib/utils";

const CardAccordion = ({
  title,
  titleClassName,
  children,
  isCollapsible = true,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
  isCollapsible?: boolean;
  defaultOpen?: boolean;
}) => {
  return (
    <Card className="w-full rounded-md px-5 py-0">
      <CardContent className="p-0">
        <Accordion
          type="single"
          defaultValue={defaultOpen ? "item-1" : undefined}
          collapsible={isCollapsible}
          className="w-full rounded-md px-1 hover:cursor-pointer"
        >
          <AccordionItem value="item-1" className="border-0">
            <AccordionTrigger className="flex items-center gap-1 py-2 hover:no-underline">
              <p
                className={cn(
                  "flex-shrink-0 lg:text-2xl sm:text-lg text-base text-primary font-semibold",
                  titleClassName
                )}
              >
                {title}
              </p>
            </AccordionTrigger>
            <AccordionContent>{children}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default CardAccordion;
