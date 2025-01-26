import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bookmark, Tag } from "lucide-react";
import Image from "next/image";
import React from "react";
import { LocationProps } from "./LocationCard.model";

export const LocationCard: React.FC<LocationProps> = ({ location }) => {
  return (
    <Card key={location.id}>
      <CardHeader>
        <Image
          width={2832}
          height={2832}
          alt="Background of a beautiful view"
          src={
            "https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </CardHeader>
      <CardContent className="text-left">
        <CardTitle className="flex justify-between uppercase tracking-widest text-xl py-3">
          <span className="text-primary-mb" children={location.company} />
          <Bookmark className="cursor-pointer" fill="black" />
        </CardTitle>
        <CardDescription className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          lobortis pulvinar lacinia. Nullam auctor nisi eu molestie sodales.
        </CardDescription>
        <ul>
          <Tag />
        </ul>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
