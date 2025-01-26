import { Separator } from "@/components/ui/separator";
import { HeaderSectionProps } from "./HeaderSection.model";
import { Button } from "@/components/ui/button";
import { Title } from "../../atoms/Title/Title";

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  description,
  heading = "h1",
  title,
  separator,
  cta,
  className,
  onCtaClick,
}) => {
  const HeadingTag = heading || "h1";

  return (
    <section className={`w-full py-4 overflow-hidden ${className || ""}`}>
      <div className="flex flex-col text-center gap-4 sm:text-left sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <Title title={title} heading={heading} />
          {description && (
            <p className="text-sm text-muted-foreground break-words">
              {description}
            </p>
          )}
        </div>
        <div className="flex justify-center sm:items-center">
          {cta && (
            <Button size="lg" variant="default" onClick={onCtaClick}>
              {cta.label}
            </Button>
          )}
        </div>
      </div>
      {separator && <Separator className="mt-4" style={{ height: 2 }} />}
    </section>
  );
};
