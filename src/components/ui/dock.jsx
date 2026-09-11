import { Children, cloneElement, isValidElement, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 44;
const DEFAULT_MAGNIFICATION = 66;
const DEFAULT_DISTANCE = 120;

export function Dock({
  className,
  children,
  iconSize = DEFAULT_SIZE,
  iconMagnification = DEFAULT_MAGNIFICATION,
  iconDistance = DEFAULT_DISTANCE,
  direction = "middle",
  ...props
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-[58px] w-max gap-2 rounded-2xl border p-2",
        direction === "top" && "items-start",
        direction === "middle" && "items-center",
        direction === "bottom" && "items-end",
        className
      )}
      {...props}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child) || child.type !== DockIcon) return child;
        return cloneElement(child, {
          mouseX,
          size: iconSize,
          magnification: iconMagnification,
          distance: iconDistance,
        });
      })}
    </motion.div>
  );
}

export function DockIcon({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const defaultMouseX = useMotionValue(Infinity);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [size, magnification, size]);
  const scaleSize = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width: scaleSize, height: scaleSize }}
      className={cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
