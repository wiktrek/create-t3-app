import type { ReactNode } from "react";
import { cn } from "~/utils/cn";

export default function PageSection(props: {
  size: "6" | "12" | "16" | "24" | "32";
  className?: string;
  bottomPadding?: boolean;
  id?: string;
  children: ReactNode;
}) {
  const sizes = {
    6: "py-2 md:py-4 lg:py-6",
    12: "py-4 md:py-8 lg:py-12",
    16: "py-6 md:py-10 lg:py-16",
    24: "py-8 md:py-16 lg:py-24",
    32: "py-12 md:py-20 lg:py-32",
  };

  const sizesOnlyTop = {
    6: "pt-2 md:pt-4 lg:pt-6",
    12: "pt-4 md:pt-8 lg:pt-12",
    16: "pt-6 md:pt-10 lg:pt-16",
    24: "pt-8 md:pt-16 lg:pt-24",
    32: "pt-12 md:pt-20 lg:pt-32",
  };

  const { size, className, bottomPadding = true, id = "" } = props;

  return (
    <section
      id={id}
      className={cn(
        className,
        bottomPadding ? sizes[size] : sizesOnlyTop[size],
      )}
    >
      {props.children}
    </section>
  );
}
