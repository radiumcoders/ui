"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type ShuffleTextProps = {
  children: string;
  duration?: number;
  speed?: number;
  className?: string;
};

function ShuffleText({
  children,
  duration = 2000,
  speed = 50,
  className,
}: ShuffleTextProps) {
  const [displayText, setDisplayText] = useState("");

  // Get random uppercase letter
  const getRandomLetter = () => {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  };

  useEffect(() => {
    // Start with random letters
    setDisplayText(
      Array(children.length).fill("").map(getRandomLetter).join("")
    );

    const startTime = Date.now();

    const intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // This is where the actual animation happens
      setDisplayText(
        Array.from(children)
          .map((targetChar, index) => {
            // Probability increases as animation progresses
            const shouldSettle = Math.random() < progress * 1.5;

            if (shouldSettle || progress === 1) {
              return targetChar;
            }
            return getRandomLetter();
          })
          .join("")
      );

      // End animation when duration is reached
      if (elapsedTime >= duration) {
        clearInterval(intervalId);
        setDisplayText(children);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [children, duration]);

  return <div className={cn("text-2xl gap-1", className)}>{displayText}</div>;
}

export default ShuffleText;
