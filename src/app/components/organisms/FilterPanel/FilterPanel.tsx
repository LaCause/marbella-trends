"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { useState } from "react";
import { HeaderSection } from "../../molecules/HeaderSection/HeaderSection";
import { FilterPanelProps } from "./FilterPanel.model";

export const FilterPanel: React.FC<FilterPanelProps> = ({
  onSubmit,
  className,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className}>
      <HeaderSection
        heading="h1"
        title="Les lieux"
        description="Retrouvez toutes les activités et les lieux de votre ville."
        cta={{ label: "Filtrer", href: "#" }}
        onCtaClick={() => setOpen(true)}
        className="mb-4"
        separator
      />
      <Sheet open={open} onOpenChange={(props) => setOpen(props)}>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Filtrer les lieux</SheetTitle>
            <SheetDescription>
              Choisissez où passer votre soirée.
            </SheetDescription>
          </SheetHeader>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Trier par : " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trends">Les lieux chics</SelectItem>
                <SelectItem value="plans">Les bons plans</SelectItem>
                <SelectItem value="price-asc">Les plus chères</SelectItem>
                <SelectItem value="price-desc">Les moins chères</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <SheetFooter className="relative">
            <SheetClose asChild>
              <Button onClick={onSubmit} className="w-full">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
