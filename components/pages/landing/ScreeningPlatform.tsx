"use client";

import { CustomInfiniteMovingCards } from "@/components/ui/CustomInfiniteMovingCards";

export function ScreeningPlatform() {
  return (
    <div className="h-full flex flex-col pb-16   antialiased  dark:bg-grid-white/[0.05] items-center justify-center">
      <span className=" text-2xl md:text-3xl font-bold p-5 sm:p-10 text-center">
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
    name: "Charles Dickens",
    title: "Coding Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "William Shakespeare",
    title: "Technical Screening",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Edgar Allan Poe",
    title: "Aptitude Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Jane Austen",
    title: "Interview Preparation",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Herman Melville",
    title: "Technical Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Charles Dickens",
    title: "Coding Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "William Shakespeare",
    title: "Technical Screening",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Edgar Allan Poe",
    title: "Aptitude Assessment",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Jane Austen",
    title: "Interview Preparation",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quibusdam aspernatur esse fugit sint consequatur nulla inventore odit et amet ipsam mollitia odio repellat consectetur, rerum repudiandae ducimus iste laboriosam.",
    name: "Herman Melville",
    title: "Technical Assessment",
  },
];
