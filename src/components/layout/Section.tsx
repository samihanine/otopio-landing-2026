import { cn } from "../../utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  as: Component = "section",
  ref,
}: SectionProps) {
  return (
    <Component ref={ref} className={cn("px-4 py-20 md:py-32", className)}>
      <div
        className={cn("mx-auto md:mx-auto md:max-w-3/4", containerClassName)}
      >
        {children}
      </div>
    </Component>
  );
}
