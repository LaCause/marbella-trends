export interface HeaderSectionProps {
  title: string;
  heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description?: string;
  separator?: boolean;
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
  onCtaClick?: () => void;
}
