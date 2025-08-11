import { motion } from "framer-motion";

export function DotsBackground() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-transparent bg-[radial-gradient(#969696_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] [background-size:25px_25px]"
      animate={{ backgroundPosition: ["0px 0px", "25px 25px"] }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity
      }}
    />
  );
}
