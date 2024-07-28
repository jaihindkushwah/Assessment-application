import { cn } from "@/lib/utils/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React, { forwardRef, HTMLAttributes, Ref } from "react";
import { buttonVariants } from "./ui/MyButton";
import { DarkModeToggle } from "./ui/DarkModeToggleButton";
import Image from "next/image";
import { PersonIcon } from "@radix-ui/react-icons";

const headerVariants = cva(
  "md:flex gap-5 items-center justify-between  flex-wrap hidden px-10 py-3 pr-5 transition-all ease-in-out",
  {
    variants: {
      variant: {
        default: " text-white",
        primary: "bg-sky-500 text-white",
        secondary: "bg-slate-500 text-white",
        danger: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface HeaderProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

const Header = forwardRef<HTMLElement, HeaderProps>(function Header(
  { ...props },
  ref: Ref<HTMLElement>
) {
  return (
    <header
      className={cn(headerVariants({ variant: "default" }))}
      {...props}
      ref={ref}
    >
      <Link href={"/"}>
        <Image
          // src="https://links.papareact.com/a943ae"
          src={"/logo2.jpeg"}
          alt="logo"
          width={140}
          height={100}
          className="rounded-sm"
        />
      </Link>
      <span className="flex gap-3 items-center ">
        <Link className={buttonVariants({ variant: "default" })} href={"/"}>
          Home
        </Link>
        <Link
          href={"/pages/dashboard"}
          className={buttonVariants({ variant: "default" })}
        >
          Dashboard
        </Link>
        <Link
          href={"/pages/contact"}
          className={buttonVariants({ variant: "default" })}
        >
          Contact
        </Link>
        <Link
          href={"/auth"}
          className={buttonVariants({
            variant: "default",
            className:
              "pt-1 pb-1 pl-1 pr-1 h-auto border-0 border-none rounded-none rounded-t-lg",
          })}
        >
          <PersonIcon className="w-7 h-7" />
        </Link>
        <DarkModeToggle />
      </span>
    </header>
  );
});

export default Header;
