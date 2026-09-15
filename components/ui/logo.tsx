import React from "react";
import Image from "next/image";

interface FullLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * Full Brand Logo — includes both the stylized typography and the falcon emblem
 * exactly as uploaded, rendered crisply with transparency over dark backgrounds.
 */
export function FullLogo({
  className = "",
  width = 200,
  height = 57, // aspect ratio 569:163 ≈ 3.49
  priority = false,
}: FullLogoProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <Image
        src="/brand-logo.png"
        alt="Brand Logo"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-h-16 object-contain"
        style={{
          aspectRatio: "569 / 163",
        }}
      />
    </div>
  );
}

export function BrandLogo({
  className = "",
  width = 190,
  priority = false,
}: {
  className?: string;
  width?: number;
  priority?: boolean;
}) {
  return (
    <FullLogo
      className={className}
      width={width}
      height={Math.round(width / 3.49)}
      priority={priority}
    />
  );
}

export { FullLogo as FalconLogo };
