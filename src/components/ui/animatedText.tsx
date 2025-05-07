"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
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
  fromP?: fromType;
};

gsap.registerPlugin(SplitText);

function AnimatedText({
  children,
  delay = 0,
  duration = 1,
  fromP = "start",
}: AnimatedTextProps) {
  const childRef = useRef<HTMLElement | null>(null);
  const splitRef = useRef<any>(null);

  useGSAP(() => {
    if (childRef.current) {
      const tl = gsap.timeline();
      splitRef.current = new SplitText(childRef.current, {
        type: "chars",
        mask: "chars",
        charsClass: "chars++",
      });
      tl.from(splitRef.current.chars, {
        opacity: 0,
        y: 50,
          //   x:20,
        scale:0.8,
        stagger: {
          each: 0.09,
          from: fromP,
        },
        duration: duration,
        delay: delay,
        ease: "power2.out",
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
