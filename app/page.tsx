// "use client";
// import { useRef } from "react";

import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { motion } from "framer-motion";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import PriceCard from "@/components/PriceCard";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  // const ref = useRef<HTMLButtonElement>(null);
  // const toggleColor = () => {};
  // dark:bg-gradient-to-r from-blue-800/20 to-blue-800/50
  return (
    <HeroHighlight containerClassName=" h-full bg-transparent  dark:bg-gradient-to-r from-blue-800/20 to-blue-800/50">
      <main className="min-h-screen flex flex-col ">
        <section className="flex flex-col-reverse max-h-screen lg:flex-row items-center mt-10 md:mt-0 max-w-screen rounded-3xl shadow-lg">
          <div className="h-full w-full">
            <div className="lg:w-[100%] lg:h-[400px] flex items-center lg:justify-start flex-col justify-center lg:p-0 sm:px-20 px-10">
              <div className="flex flex-col gap-2  items-center lg:px-24 lg:py-10  ">
                <h1 className="text-4xl font-bold font-[manrope] text-center dark:text-slate-300">
                  Welcome to Quizz Buzz
                </h1>
                <p className="text-xl font-[manrope] font-medium text-center dark:text-slate-300">
                  A coding test platform to assess your coding skills{" "}
                </p>
                <p className="text-[17px] font-medium font-[manrope] text-wrap text-center mt-2 lg:mt-5 leading-7 dark:text-slate-200">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore nobis laudantium aliquam corporis eaque quasi
                  doloremque aliquid, consequatur accusantium in facere totam,
                  mollitia aut temporibus odit, unde minus ipsum eum?
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-full relative md:w-[56%] sm:w-[65%] w-[80%]">
            <Image
              alt="landing_bg"
              src={"/code_test.svg"}
              layout="responsive"
              objectFit="cover"
              fetchPriority="high"
              width={100}
              height={100}
              className="aspect-square sm:mt-[-20px]"
            />
          </div>
        </section>
        {/* <section className="relative top-0 left-0 w-full h-10">
        <div className="absolute top-0 left-0 w-full bg-slate-400 h-10 "></div>
      </section> */}
        <section className=" rounded-3xl shadow-lg  py-5">
          <div className="flex justify-center items-center flex-col ">
            <p className="text-3xl font-bold">Features </p>
            <CardHoverEffectDemo />
          </div>
        </section>
        <section className="h-[1px] bg-slate-600 mx-4"></section>
        <section className="bg-[#f9f9f9] rounded-3xl shadow-lg  py-5">
          <HeroHighlight className="flex justify-center  items-center ">
            {/* <p className="text-2xl font-bold dark:text-black">Pricing </p> */}
            <PriceCard />
          </HeroHighlight>
        </section>
        <section className="h-[600px] rounded-3xl shadow-lg py-5">
          <div className="flex justify-center items-center flex-col">
            <HeroHighlightDemo></HeroHighlightDemo>
          </div>
        </section>
        <section className="h-[600px] bg-[#f9f9f9] rounded-3xl shadow-lg py-5">
          <div className="flex justify-center items-center">
            <p className="text-3xl font-bold dark:text-black">Contact form </p>
          </div>
        </section>
      </main>
    </HeroHighlight>
  );
}
