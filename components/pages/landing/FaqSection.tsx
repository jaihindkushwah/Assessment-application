import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const arr = [
  {
    title: "Can AI interviews and coding assessment conducted together?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex vel cumque quo, enim placeat dolorum? Ullam animi facilis fugit temporibus eaque, aliquam quam vero exercitationem quia necessitatibus, accusamus maxime.",
  },
  {
    title: "What is the benefit of QuizzBuzz coding assessment platform?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex vel cumque quo, enim placeat dolorum? Ullam animi facilis fugit temporibus eaque, aliquam quam vero exercitationem quia necessitatibus, accusamus maxime.",
  },
  {
    title: "What is a coding assessment platform?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex vel cumque quo, enim placeat dolorum? Ullam animi facilis fugit temporibus eaque, aliquam quam vero exercitationem quia necessitatibus, accusamus maxime.",
  },
  {
    title:
      "How can a coding assessment platform benefit recruiters and hiring managers?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex vel cumque quo, enim placeat dolorum? Ullam animi facilis fugit temporibus eaque, aliquam quam vero exercitationem quia necessitatibus, accusamus maxime.",
  },
  {
    title:
      "How does the online assessment platform handle scalability for organizations with varying hiring needs?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex vel cumque quo, enim placeat dolorum? Ullam animi facilis fugit temporibus eaque, aliquam quam vero exercitationem quia necessitatibus, accusamus maxime.",
  },
];
function FaqSection() {
  return (
    <section className="flex p-12 sm:px-20 sm:py-16 bg-[#f6f7fb] text-black md:flex-row  flex-col">
      <section className="flex-[.42] p-3 flex flex-col gap-6 font-sans pb-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg font-normal">
          Got a question? We&#39;re here to answer!
        </p>
      </section>
      <Accordion
        type="single"
        collapsible
        className="flex-[.58] w-full overflow-x-hidden font-sans "
      >
        {arr.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index + 1} `}
              className="border-b-slate-400/80"
            >
              <AccordionTrigger className="text-sm sm:text-lg font-medium hover:no-underline text-start ">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm  font-normal leading-normal ">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

export default FaqSection;
