"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { cloneElement, ReactElement, Ref, useRef, useEffect } from "react";

type StickyProps = {
  children: ReactElement<any>;
  intensity?: number; // Controls how much the element follows the cursor
  scale?: number; // How much the element scales on hover
  rotation?: number; // Maximum rotation in degrees
  range?: number; // How far from the element the animation activates (multiplier)
};

gsap.registerPlugin(CustomEase)

function Sticky({
  children,
  intensity = 0.15,
  scale = 1.05,
  rotation = 5,
  range = 2, // Default to 1.5x the element size
}: StickyProps) {
  const stickyRef = useRef<HTMLElement | null>(null);
  const ease = "elastic.out(1,0.3)";
  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;

    const xTo = gsap.quickTo(el, "x", {
      scale: scale,
      duration: 0.3,
      ease: ease,
    });
    const yTo = gsap.quickTo(el, "y", {
      scale: scale,
      duration: 0.3,
      ease: ease,
    });
    const rotateTo = gsap.quickTo(el, "rotation", {
      duration: 0.3,
      ease: ease,
    });

    const mouseMove = (e: MouseEvent) => {
      const { height, width, left, top } = el.getBoundingClientRect();
      const { clientX, clientY } = e;

      // Calculate extended boundaries
      const extendedWidth = width * range;
      const extendedHeight = height * range;
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Check if mouse is within extended range
      const inRange =
        clientX > centerX - extendedWidth / 2 &&
        clientX < centerX + extendedWidth / 2 &&
        clientY > centerY - extendedHeight / 2 &&
        clientY < centerY + extendedHeight / 2;

      if (inRange) {
        const x = (clientX - centerX) * intensity;
        const y = (clientY - centerY) * intensity;

        // Calculate rotation based on mouse position
        const rotateX = (y / height) * -rotation;
        const rotateY = (x / width) * rotation;

        xTo(x);
        yTo(y);
        rotateTo(rotateY); // Apply rotation

        // Optional scale effect
        gsap.to(el, { scale: scale, duration: 0.3, ease: ease });
      } else {
        // Reset when out of range
        xTo(0);
        yTo(0);
        rotateTo(0);
        gsap.to(el, { scale: 1, duration: 0.3, ease: ease });
      }
    };

    // Add event listener to document instead of just the element
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [intensity, scale, rotation, range]);

  return cloneElement(children, {
    ref: stickyRef as unknown as Ref<any>,
  });
}

export default Sticky;
