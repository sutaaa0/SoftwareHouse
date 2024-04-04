"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function CardMoving() {
  return (
    <div className="h-[auto] bg-white w-[full] lg:w-full p-12 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    logo: "/logo/logo1.png",
  },
  {
    logo: "/logo/logo2.png",
  },
  {
    logo: "/logo/logo3.png",
  },
  {
    logo: "/logo/logo4.png",
  },
  {
    logo: "/logo/logo5.png",
  },
];
