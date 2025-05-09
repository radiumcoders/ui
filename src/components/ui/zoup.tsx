"use client";
import { delay } from "motion";
import { hover, motion } from "motion/react";
type zoupProps = {
  children: string;
  duration?: number;
  stager?: number;
};

function Zoup({ children, stager = 0.03, duration = 0.33 }: zoupProps) {
    return (
      <motion.a
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        style={{
          lineHeight: 1,
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stager * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stager * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.a>
    );
}

export default Zoup;

// <>
//   <motion.div
//     initial="initial"
//     whileHover="hover"
//     className="overflow-hidden block relative text-9xl font-bold text-red-400 whitespace-nowrap "
//   >
//     <motion.div
//       variants={{
//         initial: { y: 0 },
//         hover: { y: "-100%" },
//       }}
//       transition={{
//         duration: duration,
//         delay: stager,
//       }}
//     >
//       {children?.split("").map((l, i) => {
//         return <span key={i}>{l}</span>;
//       })}
//     </motion.div>
//     <motion.div
//       className="absolute inset-0"
//       variants={{
//         initial: { y: "100%" },
//         hover: { y: 0 },
//       }}
//       transition={{
//         duration: duration,
//         delay: stager,
//       }}
//     >
//       {children?.split("").map((l, i) => {
//         return <motion.span key={i}>{l}</motion.span>;
//       })}
//     </motion.div>
//   </motion.div>
// </>