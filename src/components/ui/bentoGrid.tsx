"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "motion/react";

export function Grid({ children }: { children: ReactNode }) {
  return (
    <div
      id="grid"
      className="
        my-auto mx-auto
        w-full
        max-w-full
        px-2
        flex justify-center items-center
        relative
        sm:static
        sm:right-12
        sm:mx-0
      "
    >
      <div
        id="grid"
        className="
          grid grid-cols-4 grid-rows-3
          gap-2 sm:gap-4
          aspect-square
          w-full
          max-w-[90vw]
          sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw]
          max-h-[80vh]
        "
      >
        {children}
      </div>
    </div>
  );
}

export function GridItem({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 0.95,
      }}
      whileTap={{
        scale:0.9
      }}
      transition={{
        ease:"easeInOut"
      }}
      className={cn(
        "bg-red-300 rounded-2xl col-span-1 row-span-2 overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGridDemo({}) {
  return (
    <Grid>
      <GridItem>
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1744925327375-bb40cd276379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-yellow-300 col-span-1 row-span-1 p-0 flex items-center justify-center">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1745810187217-4d9e1ccfd9d5?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-blue-300 col-span-2 row-span-1">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1746110292165-e64d8198229c?q=80&w=1909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-emerald-300 col-span-1 row-span-2 col-start-2 row-start-2">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://plus.unsplash.com/premium_photo-1746363361741-ef6702470141?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-red-300 col-span-1 row-span-1 col-start-3">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1746184564778-87d9a18ca114?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-yellow-300 col-span-1 row-span-1">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1746107637791-d4e92dd80e77?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-blue-300 col-span-2 row-span-1">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1746190857949-8abe5717fbc0?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
      <GridItem className="bg-fuchsia-300 col-span-1 row-span-1 col-start-1 row-start-3">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1746268084019-56e8346d2dbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </GridItem>
    </Grid>
  );
}
