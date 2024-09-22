import { SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconDeviceImacCode,
  IconHourglass,
  IconSettings,
  IconTrophy,
  IconUserBolt,
} from "@tabler/icons-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const links: SidebarLinkProps[] = [
  {
    label: "Dashboard",
    href: "?route=dashboard",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Programming Arena",
    href: "#",
    icon: (
      <IconDeviceImacCode className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
    sub_links: [
      {
        label: "All DSA Challenges",
        href: "/pages/protected/dashboard/explore",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Live DSA Challenges",
        href: "/pages/protected/dashboard/live_challenges",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Create DSA Challenge",
        href: "/pages/protected/create_dsa",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Try Compiler",
        href: "/pages/protected/compiler",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    label: "Quiz Arena",
    href: "#",
    icon: (
      <IconHourglass className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
    sub_links: [
      {
        label: "Online Quiz Test",
        href: "?route=onlinequiz",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Aptitude Quiz",
        href: "?route=aptitude",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Programming Quiz",
        href: "?route=programming",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Try MCQ Arena",
        href: "/pages/protected/mcq",
        icon: (
          <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
  {
    label: "Try Compiler",
    href: "/pages/protected/compiler",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Leaderboard",
    href: "?route=leaderboard",
    icon: (
      <IconTrophy className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Account",
    href: "#",
    icon: (
      <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
    sub_links: [
      {
        label: "Profile",
        href: "/pages/protected/profile",
        icon: (
          <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Settings",
        href: "#",
        icon: (
          <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
      {
        label: "Logout",
        href: "#",
        icon: (
          <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
      },
    ],
  },
];
interface SidebarLinkProps {
  label: string;
  href: string;
  icon: JSX.Element;
  sub_links?: { label: string; href: string; icon: JSX.Element }[];
}
interface AccordionSidebarLinkProps {
  links: SidebarLinkProps;
}

function CustomSidebarLink() {
  return (
    <div className="mt-8 flex flex-col gap-2">
      {links.map((link, idx) => (
        <AccordionSidebarLink key={idx} links={link} />
      ))}
    </div>
  );
}

export default CustomSidebarLink;

export const AccordionSidebarLink = ({ links }: AccordionSidebarLinkProps) => {
  return (
    <Accordion type="single" collapsible>
      {!links.sub_links ? (
        <SidebarLink className="text-base" link={links} />
      ) : (
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger className="hover:no-underline py-2">
            <SidebarLink className="text-base" link={links} />
          </AccordionTrigger>
          <AccordionContent>
            {links.sub_links?.map((link, idx) => (
              <SidebarLink
                className="text-sm"
                key={idx + links.label}
                link={link}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      )}
    </Accordion>
  );
};
