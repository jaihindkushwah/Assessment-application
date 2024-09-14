"use client";
import { useState, useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { CardLink } from "./CardLink";
import { DashboardCardData } from "./data/data";

interface ItemCardProps {
  animation?: boolean;
  title?: string;
  description?: string;
  sub_link?: { title: string; link: string }[];
}
const useIntersectionObserver = (options: any) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true);
        setHasIntersected(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options, hasIntersected]);

  return [ref, isIntersecting];
};

// Custom hook for focus effect

const ItemCard = ({ description, title, sub_link }: ItemCardProps) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when at least 10% of the element is visible
  });

  return (
    <Card className="overflow-x-hidden w-full sm:w-[360px]">
      <div
        ref={ref as any}
        tabIndex={0} // Make the card focusable
        className={`w-full transform transition-all duration-500 ease-in-out shadow-lg ${
          isVisible ? "translate-x-0 opacity-100" : " translate-x-40 opacity-0"
        }`}
      >
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {sub_link ? (
            <CardDescription>
              {sub_link.map((item, index) => (
                <CardLink
                  title={item.title}
                  link={item.link}
                  icon={<IconChevronRight />}
                  key={index + "card link"}
                  childClassName="text-base"
                />
              ))}
            </CardDescription>
          ) : null}
        </CardContent>
      </div>
    </Card>
  );
};

function DashboardContent() {
  return (
    <div className="flex flex-wrap gap-3">
      {DashboardCardData.map((_, index) => (
        <ItemCard {..._} key={index} />
      ))}
      {DashboardCardData.map((_, index) => (
        <ItemCard {..._} key={index + "33"} />
      ))}
      {DashboardCardData.map((_, index) => (
        <ItemCard {..._} key={index + "23"} />
      ))}
      {DashboardCardData.map((_, index) => (
        <ItemCard {..._} key={index + "154"} />
      ))}
    </div>
  );
}

export default DashboardContent;
