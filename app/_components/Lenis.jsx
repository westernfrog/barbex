"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function Lenis({ children }) {
  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 5,
          smoothTouch: true,
        }}
      >
        {children}
      </ReactLenis>
    </>
  );
}
