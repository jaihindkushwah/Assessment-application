"use client";

import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import PriceCard from "@/components/PriceCard";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import { HamburgerMenuPage } from "@/components/HumbergerMenu";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";
import ContactSection from "./Contact";
import Footer from "@/components/Footer";
import FaqSection from "./FaqSection";
import SpotLight from "./SpotLight";
import { ScreeningPlatform } from "./ScreeningPlatform";

export default function LandingPage() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.scrollY > 10) {
          ref.current.className =
            "z-50 top-0 left-0 fixed right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm transition-colors duration-300";
          // ref.current.className =
          // " z-50 top-0 left-0 fixed right-0 bg-[#052c65]  dark:bg-initial ";
        } else {
          ref.current.className = " z-50 top-0 left-0 fixed right-0 ";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <HeroHighlight containerClassName="relative h-full bg-transparent dark:bg-gradient-to-r from-blue-800/20 to-blue-800/50"> */}
      <HeroHighlight containerClassName="relative h-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/50">
        <SpotLight />
        <nav ref={ref}>
          <Header />
          <HamburgerMenuPage />
        </nav>
        <main className="min-h-screen flex flex-col ">
          <section className="flex relative flex-col-reverse max-h-screen lg:flex-row items-center mt-10 max-w-screen ">
            <div className="h-full w-full md:pb-10 pb-5">
              <div className="lg:w-[100%] lg:h-[400px] flex items-center lg:justify-start flex-col justify-center lg:p-0 sm:px-20 px-10">
                <div className="flex flex-col gap-2  items-center lg:px-24 lg:py-10  ">
                  <h1 className="text-2xl md:text-4xl font-bold font-[manrope] text-center text-gray-800 ">
                    Welcome to Quizz Buzz
                  </h1>
                  <p className="text-lg sm:text-xl font-[manrope] font-medium text-center text-gray-700 ">
                    A coding test platform to assess your coding skills
                  </p>
                  <p className="text-sm sm:text-lg font-medium font-[manrope] text-wrap text-left mt-2 lg:mt-5 leading-5 text-gray-600 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore nobis laudantium aliquam corporis eaque quasi
                    doloremque aliquid, consequatur accusantium in facere totam,
                    mollitia aut temporibus odit, unde minus ipsum eum?
                  </p>
                  {/* <h1 className="text-2xl md:text-4xl font-bold font-[manrope] text-center dark:text-slate-300">
                    Welcome to Quizz Buzz
                  </h1>
                  <p className="text-lg sm:text-xl font-[manrope] font-medium text-center dark:text-slate-300">
                    A coding test platform to assess your coding skills{" "}
                  </p>
                  <p className="text-sm sm:text-lg font-medium font-[manrope] text-wrap text-left mt-2 lg:mt-5 leading-5 dark:text-slate-200">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolore nobis laudantium aliquam corporis eaque quasi
                    doloremque aliquid, consequatur accusantium in facere totam,
                    mollitia aut temporibus odit, unde minus ipsum eum?
                  </p> */}
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
          <ScreeningPlatform />
          <FaqSection />
          <ContactSection />
        </main>
      </HeroHighlight>
      <Footer />
    </>
  );
}
