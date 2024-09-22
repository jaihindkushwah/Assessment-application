"use client";
import React, { useMemo } from "react";
import Lottie from "lottie-react";
import bookAnimation from "@/lib/lottie/Animation - 1725955185529.json";
import loaderAnimation from "@/lib/lottie/Animation - 1725955642754.json";
interface LoaderAnimationProps {
  type?: "book" | "loader";
}
function LoaderAnimation({ type }: LoaderAnimationProps) {
  let animationData = type === "loader" ? loaderAnimation : bookAnimation;
  // const animationData = useMemo(() => {
  //   if (type === "loader") {
  //     return loaderAnimation;
  //   }
  //   return bookAnimation;
  // }, [type]);
  return (
    <div className="flex h-[90vh] justify-center items-center">
      <Lottie
        animationData={animationData}
        className="w-[50%] h-[50%] sm:w-[40%] sm:h-[40%] md:w-[30%] "
        loop={true}
      />
    </div>
  );
}

export default LoaderAnimation;
