"use client";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes, ReactNode } from "react";

export const HamburgerMenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="w-screen relative sm:max-h-14 max-h-12 top-0">
      <HamburgerMenu
        bgColor="dark:bg-slate-800 bg-indigo-900"
        textColor="dark:text-white text-dark"
      >
        <HamburgerMenuBrand href="/">
          <Image
            // src="https://links.papareact.com/a943ae"
            src={"/logo2.jpeg"}
            alt="logo"
            width={1920}
            height={1080}
            className="rounded-sm sm:h-[43px] sm:w-36 h-[36px] w-28"
          />
        </HamburgerMenuBrand>
        <HamburgerMenuToggler toggle={toggle} />
        <HamburgerMenuCollapse open={open}>
          <HamburgerMenuNav className="flex flex-col items-center sm:gap-4 gap-2">
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/">Home</HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/pages/dashboard">
                Dashboard
              </HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/pages/contact">
                Contact
              </HamburgerMenuLink>
            </HamburgerMenuItem>
            <HamburgerMenuItem>
              <HamburgerMenuLink href="/auth">Login</HamburgerMenuLink>
            </HamburgerMenuItem>
          </HamburgerMenuNav>
        </HamburgerMenuCollapse>
      </HamburgerMenu>
    </div>
  );
};

/* Logic */

const style = {
  nav: `  pl-0 mb-0`,
  navbar: ` md:hidden block font-light shadow py-2 px-4 z-50`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-1.5 text-4xl focus:outline-none focus:shadow`,
  link: `block cursor-pointer sm:text-[16px] py-1.5 px-4  hover:text-gray-400 font-medium `,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
};

interface HamburgerMenuProps extends HTMLAttributes<HTMLElement> {
  bgColor: string;
  textColor: string;
  children: ReactNode;
}
function HamburgerMenu({
  children,
  bgColor,
  textColor,
  ...props
}: HamburgerMenuProps) {
  return (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`} {...props}>
      {children}
    </nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
interface HamburgerMenuBrandProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
function HamburgerMenuBrand({
  children,
  href,
  ...props
}: HamburgerMenuBrandProps) {
  return (
    <Link href={href} className={style.brand} {...props}>
      <strong>{children}</strong>
    </Link>
  );
}

interface HamburgerMenuTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  toggle: () => void;
}
function HamburgerMenuToggler({ toggle, ...props }: HamburgerMenuTogglerProps) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
      {...props}
    >
      &#8801;
    </button>
  );
}

interface HamburgerMenuCollapseProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  children: ReactNode;
}
function HamburgerMenuCollapse({
  children,
  open,
  ...props
}: HamburgerMenuCollapseProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const inlineStyle = open
    ? {
        height: ref.current?.scrollHeight,
        visibility: "visible" as "visible",
        opacity: 1,
      }
    : { height: 0, visibility: "hidden" as "hidden", opacity: 0 };

  return (
    <div
      className={style.collapse}
      style={{ ...inlineStyle }}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
}

interface HamburgerMenuNavProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}
function HamburgerMenuNav({ children, ...props }: HamburgerMenuNavProps) {
  return (
    <ul className={style.nav} {...props}>
      {children}
    </ul>
  );
}

interface HamburgerMenuItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
function HamburgerMenuItem({ children, ...props }: HamburgerMenuItemProps) {
  return <li {...props}>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */

interface HamburgerMenuLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}
function HamburgerMenuLink({
  children,
  href,
  ...props
}: HamburgerMenuLinkProps) {
  return (
    <Link href={href} className={style.link} {...props}>
      {children}
    </Link>
  );
}
