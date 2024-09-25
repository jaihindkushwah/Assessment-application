// "use client";

import { CustomInfiniteMovingCards } from "@/components/ui/CustomInfiniteMovingCards";

export function ScreeningPlatform() {
  return (
    <div className="h-full flex flex-col pb-5 sm:pb-10 md:pb-16 bg-[#f0f0f0] dark:bg-[#03265c] antialiased  dark:bg-grid-white/[0.05] items-center justify-center">
      <span className=" text-2xl md:text-3xl font-bold p-5 sm:p-8 text-center">
        Quizz Buzz Screening Platform{" "}
      </span>
      <CustomInfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Charles Dickens1",
    title: "Coding Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "William Shakespeare1",
    title: "Technical Screening",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Edgar Allan Poe1",
    title: "Aptitude Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Jane Austen1",
    title: "Interview Preparation",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Herman Melville1",
    title: "Technical Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Charles Dickens2",
    title: "Coding Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "William Shakespeare2",
    title: "Technical Screening",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Edgar Allan Poe10",
    title: "Aptitude Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Jane Austen10",
    title: "Interview Preparation",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Herman Melville12",
    title: "Technical Assessment",
  },
];
