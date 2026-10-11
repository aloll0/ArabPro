"use client";

import React, { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop */
  duration?: number;
  reverse?: boolean;
  /** Gap between repeated groups */
  gapClassName?: string;
  /** Number of times to repeat the children per half */
  repeat?: number;
  /** Pause on hover */
  pauseOnHover?: boolean;
}

/**
 * High-performance Infinite CSS marquee.
 * Always moves continuously, pauses immediately when hovered,
 * and uses dir="ltr" to prevent RTL translation anomalies.
 */
export function Marquee({
  children,
  className,
  duration = 35,
  reverse = false,
  gapClassName = "gap-[4vw] pr-[4vw]",
  repeat = 2,
  pauseOnHover = true,
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const repetitions = Math.max(1, repeat);

  return (
    <div
      dir="ltr"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
      className={cn(
        "marquee-container group relative overflow-hidden w-full select-none cursor-pointer",
        className,
      )}
      role="presentation"
    >
      <div
        className={cn(
          "flex w-max will-change-transform",
          reverse ? "marquee-track-ltr-reverse" : "marquee-track-ltr",
        )}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationPlayState: isHovered ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {/* First Half */}
        <div className="flex shrink-0 items-center">
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={`h1-${i}`}
              className={cn("flex shrink-0 items-center", gapClassName)}
            >
              {children}
            </div>
          ))}
        </div>

        {/* Second Half (Exact pixel-identical duplicate for seamless infinite loop) */}
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {Array.from({ length: repetitions }).map((_, i) => (
            <div
              key={`h2-${i}`}
              className={cn("flex shrink-0 items-center", gapClassName)}
            >
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
