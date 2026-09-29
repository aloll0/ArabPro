"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import Image from "next/image";

const images = [
  {
    src: "https://files.catbox.moe/jmfo6i.png",
    top: "5vh",
    left: "10%",
    width: "11%",
    mLeft: "5%",
    mWidth: "55%",
    z: 300,
  },
  {
    src: "https://files.catbox.moe/64a3xp.jpg",
    top: "25vh",
    left: "78%",
    width: "24%",
    mLeft: "45%",
    mWidth: "50%",
    z: -400,
  },
  {
    src: "https://files.catbox.moe/lnes0p.png",
    top: "50vh",
    left: "5%",
    width: "30%",
    mLeft: "0%",
    mWidth: "60%",
    z: -800,
  },
  {
    src: "https://files.catbox.moe/eezf56.png",
    top: "80vh",
    left: "55%",
    width: "28%",
    mLeft: "35%",
    mWidth: "60%",
    z: 150,
  },
  {
    src: "https://files.catbox.moe/dwj07q.png",
    top: "110vh",
    left: "2%",
    width: "22%",
    mLeft: "2%",
    mWidth: "45%",
    z: -600,
  },
  {
    src: "https://files.catbox.moe/yy7y9t.png",
    top: "140vh",
    left: "0%",
    width: "20%",
    mLeft: "0%",
    mWidth: "70%",
    z: -200,
  },
  {
    src: "https://files.catbox.moe/423wie.jpg",
    top: "160vh",
    left: "65%",
    width: "45%",
    mLeft: "30%",
    mWidth: "65%",
    z: -1000,
  },
  {
    src: "https://files.catbox.moe/ftcjbi.jpg",
    top: "180vh",
    left: "20%",
    width: "18%",
    mLeft: "10%",
    mWidth: "40%",
    z: 400,
  },
  {
    src: "https://files.catbox.moe/r47614.png",
    top: "210vh",
    left: "60%",
    width: "25%",
    mLeft: "40%",
    mWidth: "55%",
    z: -500,
  },
  {
    src: "https://files.catbox.moe/n1pq0l.jpg",
    top: "270vh",
    left: "10%",
    width: "24%",
    mLeft: "5%",
    mWidth: "50%",
    z: -800,
  },
  {
    src: "https://files.catbox.moe/q61j0p.jpg",
    top: "280vh",
    left: "70%",
    width: "22%",
    mLeft: "45%",
    mWidth: "50%",
    z: 200,
  },
  {
    src: "https://files.catbox.moe/4ma9lt.jpg",
    top: "350vh",
    left: "70%",
    width: "26%",
    mLeft: "40%",
    mWidth: "55%",
    z: 100,
  },
];

const targetMedia = {
  src: "/videos/national-day.mp4",
  fallbackSrc:
    "https://videos.themiify.com/api/videos/04dc9218-728b-4fe0-b9ef-358e5c36fe87/stream?accessToken=695c1a7e871a0ec58f6d0b8a9bd5db48",
  left: "40%",
  width: "20%",
  mLeft: "15%",
  mWidth: "70%",
};

const targetImage = targetMedia;

const visionData = [
  {
    heading: "Design",
    desc: "Our design aesthetic is established through a consistent process and a detailed concept brief, which considers client needs, site context, and future occupiers.",
  },
  {
    heading: "Innovation",
    desc: "We combine and test these elements to create a singular design vision concealing many influencing layers. This singular vision, like a piece of artwork, is unique and individual.",
  },
  {
    heading: "Enhancement",
    desc: "We believe the principles of design quality should always be present no matter the project brief or building scale. Every detail is meticulously refined to exceed expectations.",
  },
];

const duration = 0.8;
const pause = 0.5;
const stagger = 0.05;
const easeLine = "none";
const easeHead = "power1.inOut";

export function StickyGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const dim = "rgba(255,255,255,0.2)";
      const bright = "rgba(255,255,255,1)";

      const getHeadingX = (i: number) => {
        const items = gsap.utils.toArray<HTMLElement>(".heading-item");
        return items[i] ? -items[i].offsetLeft : 0;
      };

      const splits = visionData.map((_, idx) =>
        SplitText.create(`.desc-block-${idx}`, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        }),
      );

      splits.forEach((s) => gsap.set(s.lines, { yPercent: 100 }));
      gsap.set(".heading-item", { color: dim });
      gsap.set(".heading-item-0", { color: bright });
      gsap.set(".moving-heading", {
        force3D: true,
        transformOrigin: "0% 50%",
      });

      gsap.utils.toArray<HTMLElement>(".grid-image").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0");
        gsap.to(el, {
          yPercent: speed * 50,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      if (pinWrapperRef.current && targetRef.current) {
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinWrapperRef.current,
            start: "center center",
            end: "+=600%",
            scrub: 0.55,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        pinTl
          .to(targetRef.current, {
            width: "100vw",
            height: "100vh",
            marginLeft: 0,
            borderRadius: 0,
            ease: "none",
            duration: 1,
          })
          .to(".center-text", { opacity: 0, duration: 1 }, "<")
          .to(".target-overlay", { opacity: 1, duration: 0.2 })
          .to(splits[0].lines, {
            yPercent: 0,
            stagger,
            duration,
            ease: easeLine,
          })
          .to({}, { duration: pause });

        for (let s = 0; s < visionData.length - 1; s++) {
          const next = s + 1;
          const label = `slide${next + 1}`;
          pinTl.addLabel(label);
          pinTl
            .to(
              ".moving-heading",
              {
                x: () => getHeadingX(next),
                duration,
                ease: easeHead,
              },
              label,
            )
            .to(
              splits[s].lines,
              { yPercent: -100, stagger, duration, ease: easeLine },
              label,
            )
            .to(`.heading-item-${s}`, { color: dim, duration }, label)
            .to(`.heading-item-${next}`, { color: bright, duration }, label)
            .to(
              splits[next].lines,
              { yPercent: 0, stagger, duration, ease: easeLine },
              label,
            );
          pinTl.to({}, { duration: pause });
        }
      }

      // Refresh ScrollTrigger after DOM & images settle
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        splits.forEach((s) => s.revert());
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] overflow-x-clip bg-black"
    >
      {/* Sticky Center Text - Sticks to viewport center while user scrolls */}
      <div className="center-text sticky top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-10">
        <h1 className="text-white text-[8vw] max-md:text-[13vw] font-medium tracking-tighter mix-blend-difference select-none">
          Arab Pro
        </h1>
      </div>

      {/* Floating Parallax Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {images.map((img, i) => (
          <div
            key={i}
            data-speed={img.z / 500}
            className="grid-image absolute shadow-[0_0.8vw_2.5vw_rgba(0,0,0,0.5)] group pointer-events-auto"
            style={{
              top: img.top,
              left: img.left,
              width: img.width,
              transform: `perspective(1200px) translateZ(${img.z}px)`,
              willChange: "transform",
            }}
          >
            <Image
              src={img.src}
              alt={`Architecture ${i + 1}`}
              className="w-full h-auto object-cover block grayscale-20 group-hover:grayscale-0 transition-all duration-700 ease-out"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>

      {/* Pinned Expanding Target Card */}
      <div
        ref={pinWrapperRef}
        className="absolute z-20 w-full h-screen flex justify-start items-center pointer-events-none overflow-hidden"
        style={{ top: "200vh", left: 0 }}
      >
        <div
          ref={targetRef}
          className="shadow-[0_0.8vw_2.5vw_rgba(0,0,0,0.6)] overflow-hidden pointer-events-auto relative"
          style={{
            marginLeft: targetImage.left,
            width: targetImage.width,
            height: "40vh",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover block absolute inset-0 z-0"
          >
            <source src={targetMedia.src} type="video/mp4" />
            <source src={targetMedia.fallbackSrc} type="video/mp4" />
          </video>

          <div className="target-overlay absolute inset-0 z-10 p-[3vw] max-md:p-[2vw] flex flex-col justify-between opacity-0 text-white pointer-events-none bg-black/40 backdrop-blur-[2px]">
            <div className="relative w-full min-w-0 grow overflow-hidden">
              <div className="absolute top-1/2 -translate-y-1/2 w-full z-0 min-w-0 max-w-full left-[2.5vw] max-md:left-[1.5vw]">
                <h2 className="moving-heading will-change-transform text-[7vw] max-md:text-[16vw] font-medium tracking-tighter whitespace-nowrap flex gap-[6vw] max-md:gap-[8.5vw] items-center w-max max-w-full">
                  {visionData.map((data, idx) => (
                    <span
                      key={idx}
                      className={`heading-item heading-item-${idx}`}
                    >
                      {data.heading}
                    </span>
                  ))}
                </h2>
              </div>

              <div className="vision-desc-wrap absolute z-10 w-[30vw] max-md:w-[80vw] right-[1.5vw] bottom-[1.5vw] max-md:right-[1vw] max-md:bottom-0">
                <div className="relative w-full min-h-[12vw] h-[16vw] max-md:min-h-[25vw] max-md:h-[30vw]">
                  {visionData.map((data, idx) => (
                    <p
                      key={idx}
                      className={`desc-block desc-block-${idx} absolute inset-0 m-0 w-full text-[1.1vw] max-md:text-[3.7vw] leading-[1.4] font-medium`}
                    >
                      {data.desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
