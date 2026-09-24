"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { isTouchDevice } from "@/lib/device";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type Variant = "default" | "hover" | "view" | "drag";

/**
 * Eagle Custom Cursor — Replaces the native mouse cursor with the ArabPro
 * lilac falcon/eagle icon, featuring fluid lerped movement, interactive
 * scaling, dynamic aura glow, click feedback, and contextual badges.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const eagleRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  const [variant, setVariant] = useState<Variant>("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const reducedMotion = useReducedMotion();

  // Add class to body to hide system cursor only on fine pointer devices when active
  useEffect(() => {
    if (reducedMotion || isTouchDevice()) return;
    document.body.classList.add("has-custom-cursor");
    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [reducedMotion]);

  useGSAP(
    () => {
      const cursorEl = cursorRef.current;
      const eagleEl = eagleRef.current;
      const haloEl = haloRef.current;
      if (!cursorEl || !eagleEl || !haloEl || reducedMotion || isTouchDevice())
        return;

      setEnabled(true);

      // Initial state: hide until mouse moves into viewport
      gsap.set(cursorEl, { autoAlpha: 0 });
      gsap.set(eagleEl, { xPercent: 0, yPercent: -48 }); // Align beak tip precisely to cursor coordinates
      gsap.set(haloEl, { xPercent: -50, yPercent: -50 });

      // Snappy position for the eagle pointer (instant feel)
      const xEagle = gsap.quickTo(eagleEl, "x", {
        duration: 0.16,
        ease: "power2.out",
      });
      const yEagle = gsap.quickTo(eagleEl, "y", {
        duration: 0.16,
        ease: "power2.out",
      });

      // Fluid trailing position for the ambient halo
      const xHalo = gsap.quickTo(haloEl, "x", {
        duration: 0.38,
        ease: "power3.out",
      });
      const yHalo = gsap.quickTo(haloEl, "y", {
        duration: 0.38,
        ease: "power3.out",
      });

      let lastX = 0;
      let lastY = 0;

      const onMove = (e: PointerEvent) => {
        gsap.to(cursorEl, { autoAlpha: 1, duration: 0.2 });

        xEagle(e.clientX);
        yEagle(e.clientY);
        xHalo(e.clientX);
        yHalo(e.clientY);

        // Velocity tilt effect
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const tilt = Math.max(-14, Math.min(14, (dy - dx) * 0.35));
        gsap.to(eagleEl, {
          rotation: tilt,
          duration: 0.3,
          ease: "power1.out",
          overwrite: "auto",
        });

        lastX = e.clientX;
        lastY = e.clientY;
      };

      const onLeave = () => {
        gsap.to(cursorEl, { autoAlpha: 0, duration: 0.25 });
      };

      const onDown = () => {
        setIsClicking(true);
        gsap.to(eagleEl, {
          scale: 0.82,
          rotation: -8,
          duration: 0.12,
          ease: "power2.out",
        });
        gsap.to(haloEl, {
          scale: 0.75,
          duration: 0.12,
          ease: "power2.out",
        });
      };

      const onUp = () => {
        setIsClicking(false);
        gsap.to(eagleEl, {
          scale: 1,
          rotation: 0,
          duration: 0.25,
          ease: "back.out(2.5)",
        });
        gsap.to(haloEl, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(2)",
        });
      };

      const onOver = (e: PointerEvent) => {
        const target = e.target as Element | null;
        if (!target) return;

        // Explicit data-cursor targets take priority
        const cursorTarget = target.closest?.("[data-cursor]");
        if (cursorTarget) {
          const v =
            (cursorTarget.getAttribute("data-cursor") as Variant) || "hover";
          setVariant(v);
          setLabel(cursorTarget.getAttribute("data-cursor-label") ?? "");
          return;
        }

        // Implicit clickable elements (links, buttons, inputs)
        const interactiveTarget = target.closest?.(
          "a, button, [role='button'], input[type='submit'], input[type='button'], summary",
        );
        if (interactiveTarget) {
          setVariant("hover");
          setLabel("");
          return;
        }

        // Default state
        setVariant("default");
        setLabel("");
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onDown);
      window.addEventListener("pointerup", onUp);
      document.documentElement.addEventListener("pointerleave", onLeave);
      document.addEventListener("pointerover", onOver, { passive: true });

      return () => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointerup", onUp);
        document.documentElement.removeEventListener("pointerleave", onLeave);
        document.removeEventListener("pointerover", onOver);
      };
    },
    { dependencies: [reducedMotion] },
  );

  // Animate eagle & halo states when variant or click state changes
  useGSAP(
    () => {
      const eagleEl = eagleRef.current;
      const haloEl = haloRef.current;
      if (!eagleEl || !haloEl || !enabled || isClicking) return;

      if (variant === "hover") {
        gsap.to(eagleEl, {
          scale: 1.35,
          duration: 0.3,
          ease: "back.out(2)",
        });
        gsap.to(haloEl, {
          width: 58,
          height: 58,
          backgroundColor: "rgba(181, 126, 220, 0.15)",
          borderColor: "rgba(181, 126, 220, 0.5)",
          duration: 0.35,
          ease: "back.out(1.8)",
        });
      } else if (variant === "view" || variant === "drag") {
        gsap.to(eagleEl, {
          scale: 1.15,
          duration: 0.3,
          ease: "back.out(1.5)",
        });
        gsap.to(haloEl, {
          width: 86,
          height: 86,
          backgroundColor: "rgba(181, 126, 220, 0.88)",
          borderColor: "rgba(255, 255, 255, 0.8)",
          duration: 0.4,
          ease: "back.out(2)",
        });
      } else {
        // Default variant
        gsap.to(eagleEl, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(haloEl, {
          width: 32,
          height: 32,
          backgroundColor: "rgba(181, 126, 220, 0.08)",
          borderColor: "rgba(181, 126, 220, 0.25)",
          duration: 0.35,
          ease: "power2.out",
        });
      }
    },
    { dependencies: [variant, enabled, isClicking] },
  );

  if (reducedMotion) return null;

  const isViewOrDrag = variant === "view" || variant === "drag";

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden select-none md:block"
    >
      {/* Trailing Ambient Halo / Interactive Ring */}
      <div
        ref={haloRef}
        className={cn(
          "absolute left-0 top-0 flex items-center justify-center rounded-full border transition-shadow duration-300 backdrop-blur-[2px]",
          variant === "hover" && "shadow-[0_0_24px_rgba(181,126,220,0.5)]",
          isViewOrDrag && "shadow-[0_0_35px_rgba(181,126,220,0.7)] text-black",
        )}
        style={{
          width: 32,
          height: 32,
          borderColor: "rgba(181, 126, 220, 0.25)",
          backgroundColor: "rgba(181, 126, 220, 0.08)",
        }}
      >
        {isViewOrDrag && label && (
          <span className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-black">
            {label}
          </span>
        )}
      </div>

      {/* Main Eagle Head Pointer */}
      <div
        ref={eagleRef}
        className="absolute left-0 top-0 will-change-transform"
        style={{
          width: 36,
          height: 29,
          filter:
            variant === "hover"
              ? "drop-shadow(0 0 12px rgba(181, 126, 220, 0.95)) drop-shadow(0 0 24px rgba(198, 255, 0, 0.4))"
              : "drop-shadow(0 2px 8px rgba(181, 126, 220, 0.45))",
        }}
      >
        <Image
          src="/eagle-cursor.png"
          alt=""
          width={72}
          height={58}
          priority
          className="h-full w-full object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
