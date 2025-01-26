import { Location } from "@prisma/client";

export interface CardGridProps {
  locations: Location[];
  className?: string;
}
