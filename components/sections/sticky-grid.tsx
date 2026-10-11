"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

const images = [
  {
    src: "/images/sticky-grid/jmfo6i.png",
    top: "5vh",
    left: "10%",
    width: "11%",
    mLeft: "5%",
    mWidth: "55%",
    z: 300,
  },
  {
    src: "/images/sticky-grid/64a3xp.jpg",
    top: "25vh",
    left: "78%",
    width: "24%",
    mLeft: "45%",
    mWidth: "50%",
    z: -400,
  },
  {
    src: "/images/sticky-grid/lnes0p.png",
    top: "50vh",
    left: "5%",
    width: "30%",
    mLeft: "0%",
    mWidth: "60%",
    z: -800,
  },
  {
    src: "/images/sticky-grid/eezf56.png",
    top: "80vh",
    left: "55%",
    width: "28%",
    mLeft: "35%",
    mWidth: "60%",
    z: 150,
  },
  {
    src: "/images/sticky-grid/dwj07q.png",
    top: "110vh",
    left: "2%",
    width: "22%",
    mLeft: "2%",
    mWidth: "45%",
    z: -600,
  },
  {
    src: "/images/sticky-grid/yy7y9t.png",
    top: "140vh",
    left: "0%",
    width: "20%",
    mLeft: "0%",
    mWidth: "70%",
    z: -200,
  },
  {
    src: "/images/sticky-grid/423wie.jpg",
    top: "160vh",
    left: "65%",
    width: "45%",
    mLeft: "30%",
    mWidth: "65%",
    z: -1000,
  },
  {
    src: "/images/sticky-grid/ftcjbi.jpg",
    top: "180vh",
    left: "20%",
    width: "18%",
    mLeft: "10%",
    mWidth: "40%",
    z: 400,
  },
  {
    src: "/images/sticky-grid/r47614.png",
    top: "210vh",
    left: "60%",
    width: "25%",
    mLeft: "40%",
    mWidth: "55%",
    z: -500,
  },
  {
    src: "/images/sticky-grid/n1pq0l.jpg",
    top: "270vh",
    left: "10%",
    width: "24%",
    mLeft: "5%",
    mWidth: "50%",
    z: -800,
  },
  {
    src: "/images/sticky-grid/q61j0p.jpg",
    top: "280vh",
    left: "70%",
    width: "22%",
    mLeft: "45%",
    mWidth: "50%",
    z: 200,
  },
  {
    src: "/images/sticky-grid/4ma9lt.jpg",
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
  width: "22vw",
  height: "42vh",
};

const visionData = [
  {
    headingAr: "Vision • الرؤية",
    headingEn: "Vision • Concept",
    descAr:
      "الصقر (حرف ع) — رؤية وطنية ثاقبة واستراتيجية عميقة ترسم تموضع علامتك بأعلى معايير الإبداع والتأثير المستدام.",
    descEn:
      "The Falcon (Letter ع) — Piercing national vision and deep strategy shaping your brand positioning with sustainable impact.",
  },
  {
    headingAr: "Direction • الاتجاه",
    headingEn: "Direction • Momentum",
    descAr:
      "الخطوط الثلاثة (حرف ر) — مسار تنفيذي متكامل يربط بين الشاشة والميدان، ويقود علامتك نحو النمو والريادة في السوق.",
    descEn:
      "The Three Lines (Letter ر) — Integrated execution roadmap connecting screen to field, steering market leadership.",
  },
  {
    headingAr: "Precision • الدقة",
    headingEn: "Precision • Craft",
    descAr:
      "النقطة (حرف ب) — عناية فائقة بأدق تفاصيل الإنتاج السينمائي والتقني، لضمان مخرجات تليق بأكبر الجهات والمشاريع الطموحة.",
    descEn:
      "The Dot (Letter ب) — Obsessive attention to cinematic and technical detail, delivering results for ambitious entities.",
  },
];

const duration = 0.8;
const pause = 0.5;
const easeHead = "power1.inOut";

export function StickyGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted] = useState(true);
  const { lang } = useTranslation();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current || !pinWrapperRef.current || !targetRef.current)
      return;

    const ctx = gsap.context(() => {
      const dim = "rgba(255,255,255,0.2)";
      const bright = "rgba(255,255,255,1)";

      const isMobile = window.innerWidth < 768;
      const startClip = isMobile
        ? "inset(32% 15% round 16px)"
        : "inset(28% 38% round 16px)";
      const endClip = "inset(0% 0% round 0px)";

      const getHeadingX = (i: number) => {
        const items = gsap.utils.toArray<HTMLElement>(".heading-item");
        return items[i] ? -items[i].offsetLeft : 0;
      };

      // Set initial states
      gsap.set(targetRef.current, { clipPath: startClip });
      gsap.set(".desc-block", { autoAlpha: 0, y: 20 });
      gsap.set(".heading-item", { color: dim });
      gsap.set(".heading-item-0", { color: bright });
      gsap.set(".moving-heading", {
        force3D: true,
        transformOrigin: "0% 50%",
      });

      // Parallax images
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

      // Pin Timeline using GPU clip-path (zero layout reflow & zero buffer resize freeze)
      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "center center",
          end: "+=380%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Expand card smoothly from center without resizing DOM video texture
      pinTl
        .to(targetRef.current, {
          clipPath: endClip,
          ease: "none",
          duration: 1,
        })
        .to(".center-text", { opacity: 0, duration: 1 }, "<")
        .to(".target-overlay", { opacity: 1, duration: 0.3 })
        .to(".desc-block-0", {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to({}, { duration: pause });

      // Step transitions - clean autoAlpha so text NEVER overlaps
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
          .to(`.heading-item-${s}`, { color: dim, duration }, label)
          .to(`.heading-item-${next}`, { color: bright, duration }, label)
          .to(
            `.desc-block-${s}`,
            { autoAlpha: 0, y: -20, duration: 0.35, ease: "power2.in" },
            label,
          )
          .to(
            `.desc-block-${next}`,
            { autoAlpha: 1, y: 0, duration: 0.45, ease: "power2.out" },
            label + "+=0.1",
          );
        pinTl.to({}, { duration: pause });
      }

      // Smoothly fade out the video container so it never overlaps the WorkGrid portfolio below
      pinTl
        .to(targetRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          pinWrapperRef.current,
          {
            autoAlpha: 0,
            duration: 0.3,
          },
          "<",
        );

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, containerRef);

    return () => ctx.revert();
  }, [lang]);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      className="relative w-full h-[500vh] bg-black"
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

      {/* Pinned Expanding Target Card - GPU-clipped, 100% centered in RTL & LTR */}
      <div
        ref={pinWrapperRef}
        className="absolute z-20 w-full h-screen flex justify-center items-center pointer-events-none overflow-hidden will-change-transform"
        style={{ top: "200vh", left: 0 }}
      >
        <div
          ref={targetRef}
          className="shadow-[0_0.8vw_2.5vw_rgba(0,0,0,0.6)] overflow-hidden pointer-events-auto relative w-full h-full will-change-[clip-path]"
          style={{
            clipPath: "inset(28% 38% round 16px)",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover block absolute inset-0 z-0 pointer-events-none"
          >
            <source src={targetMedia.src} type="video/mp4" />
            <source src={targetMedia.fallbackSrc} type="video/mp4" />
          </video>

          {/* Cinematic dark scrim overlay */}
          <div className="target-overlay absolute inset-0 z-10 p-[3vw] max-md:p-[2vw] flex flex-col justify-between opacity-0 text-white pointer-events-none bg-linear-to-t from-black/85 via-black/45 to-black/30">
            <div className="relative w-full min-w-0 grow overflow-hidden">
              <div className="absolute top-1/2 -translate-y-1/2 w-full z-0 min-w-0 max-w-full left-[2.5vw] max-md:left-[1.5vw]">
                <h2 className="moving-heading will-change-transform text-[7vw] max-md:text-[16vw] font-medium tracking-tighter whitespace-nowrap flex gap-[6vw] max-md:gap-[8.5vw] items-center w-max max-w-full">
                  {visionData.map((data, idx) => (
                    <span
                      key={idx}
                      className={`heading-item heading-item-${idx}`}
                    >
                      {lang === "ar" ? data.headingAr : data.headingEn}
                    </span>
                  ))}
                </h2>
              </div>

              {/* Vision Description Wrap - Bilingual text layout */}
              <div
                className={cn(
                  "vision-desc-wrap absolute z-10 w-[34vw] max-md:w-[85vw] bottom-[3vw] max-md:bottom-[2vw]",
                  lang === "ar"
                    ? "right-[3vw] max-md:right-[2vw] text-right"
                    : "left-[3vw] max-md:left-[2vw] text-left",
                )}
                dir={lang === "ar" ? "rtl" : "ltr"}
              >
                <div className="relative w-full min-h-[14vw] h-[16vw] max-md:min-h-[30vw] max-md:h-[35vw]">
                  {visionData.map((data, idx) => (
                    <p
                      key={idx}
                      className={cn(
                        `desc-block desc-block-${idx} absolute inset-0 m-0 w-full text-[1.15vw] max-md:text-[3.8vw] leading-[1.7] font-medium text-white/95 select-none`,
                        lang === "ar" ? "text-right" : "text-left",
                      )}
                    >
                      {lang === "ar" ? data.descAr : data.descEn}
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
