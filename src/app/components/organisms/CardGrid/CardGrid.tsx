import React from "react";
import { CardGridProps } from "./CardGrid.model";
import { LocationCard } from "../../molecules/LocationCard/LocationCard";
import { cva } from "class-variance-authority";

export const CardGrid: React.FC<CardGridProps> = ({ locations, className }) => {
  const cardGridClassName = cva("grid sm:grid-cols-2 md:grid-cols-3 gap-4");

  return (
    <div className={`${cardGridClassName()} ${className || ""}`}>
      {locations.map((location, index) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
};
