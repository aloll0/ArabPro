"use client";

import { AuroraBlob, SceneLights } from "./aurora-blob";
import { ParticleField } from "./particle-field";

/**
 * Default hero background: distorted blob offset to the right,
 * particle field behind, cinematic light rig.
 */
export function HeroScene() {
  return (
    <>
      <SceneLights />
      <ParticleField />
      <AuroraBlob position={[2.4, 0.55, -0.9]} scale={1.25} />
      <fog attach="fog" args={["#000000", 7, 15]} />
    </>
  );
}
