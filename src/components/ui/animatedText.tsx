"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase, SplitText } from "gsap/all";
import { cloneElement, ReactElement, Ref, useRef } from "react";

type fromType =
  | number
  | "start"
  | "center"
  | "end"
  | "edges"
  | "random"
  | [number, number]
  | undefined;
type AnimatedTextProps = {
  children: ReactElement<any>;
  delay?: number;
  duration?: number;
  from?: fromType;
};

gsap.registerPlugin(SplitText , CustomEase);

function AnimatedText({
  children,
  delay = 0,
  duration = 1,
  from = "random",
}: AnimatedTextProps) {
  const childRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<any>(null);

  useGSAP(() => {
    if (childRef.current) {
      const tl = gsap.timeline();
      splitRef.current = new SplitText(childRef.current, {
        type:"chars",
        // mask: "chars",
        charsClass: "chars++",
      });
      tl.from(splitRef.current.chars, {
          opacity: 0,
          filter:"blur(10px)",
        y: 50,
        x:25,
        scale: 0.8,
        stagger: {
          each: 0.09,
          from: from,
        },
        duration: duration,
        delay: delay,
        ease: CustomEase.create("custom", "M0,0 C0,0.816 1.018,1.999 1,0.977 "),
      });
    }
    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  });

  // Only pass ref if the child supports it
  return cloneElement(children, {
    ref: childRef as unknown as Ref<any>,
  });
}

export default AnimatedText;
