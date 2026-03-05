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
    <Component ref={ref} className={`py-20 md:py-32 px-4 ${className}`}>
      <div className={`md:max-w-3/4 md:mx-auto mx-auto ${containerClassName}`}>
        {children}
      </div>
    </Component>
  );
}
