import React from "react";
import { TitleProps } from "./Title.model";
import { cva } from "class-variance-authority";
import { cn } from "@/app/utils";

export const Title: React.FC<TitleProps> = ({
  title,
  heading,
  className,
  ...props
}) => {
  const Heading = heading || "h1";

  const classVariances = cva("font-kanit uppercase tracking-widest", {
    variants: {
      heading: {
        h1: "text-3xl",
        h2: "text-2xl",
        h3: "text-xl",
        h4: "text-lg",
        h5: "text-md",
        h6: "text-sm",
      },
    },
  });
  return (
    <Heading className={cn(classVariances({ heading }), className)} {...props}>
      {title}
    </Heading>
  );
};
