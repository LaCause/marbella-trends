import Image from "next/image";
import { HeroHighlight } from "./components/ui/HeroHighlight/HeroHighlight";
import { FlipWords } from "./components/molecules/FlipWords/FlipWords";
import { BentoGrid, BentoGridItem } from "./components/ui/BentoGrid/BentoGrid";
import { X } from "lucide-react";
import { cn } from "./utils";

export default function Home() {
  const words = ["Nightclubs", "Holy Beach", "Yacht Club"];

  const bentoGridData = [
    {
      title: "Breathe Puerto banus",
      description: "Le restaurant breathe est un des plus hype",
      header: (
        <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),
      icon: <X />,
    },
    {
      title: "Smoke House",
      description: "Le restaurant breathe est un des plus hype",
      header: (
        <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),
      icon: <X />,
    },
    {
      title: "Blend",
      description: "Le restaurant breathe est un des plus hype",
      header: (
        <img src="https://images.unsplash.com/photo-1485030056468-3820ff9e6e90?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      ),
      icon: <X />,
    },
  ];

  return (
    <div className="h-[40rem]px-4">
      <HeroHighlight>
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
          Marbella
          <FlipWords words={words} /> <br />
          In Marbella & Puerto-Banus
          <button>Button</button>
        </div>
      </HeroHighlight>
      <BentoGrid>
        {bentoGridData.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
