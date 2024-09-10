import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const SpotlightVariants = cva(
  "top-[-100px] -left-80 absolute w-full h-[500px] hidden dark:block",
  {
    variants: {
      variant: {
        default: " text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SpotlightProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof SpotlightVariants> {}
function SpotLight({ className, ...props }: SpotlightProps) {
  return (
    <div
      className={SpotlightVariants({ variant: "default", className })}
      style={{
        filter: "blur(30.0263900757px)",
        background:
          "radial-gradient(55.59% 55.59% at 49.94% 44.41%, rgba(0, 0, 203, .58) 0, rgba(0, 0, 203, 0) 100%)",
      }}
      {...props}
    ></div>
  );
}

export default SpotLight;
