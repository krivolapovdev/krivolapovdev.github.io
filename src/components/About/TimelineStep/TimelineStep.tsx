import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type TimelineStepProps = {
  year: number;
  title: string;
  text: string;
};

export function TimelineStep({
  year,
  title,
  text
}: Readonly<TimelineStepProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:left-[-35px] sm:before:z-[1] sm:before:h-4 sm:before:w-4 sm:before:rounded-full before:dark:bg-violet-600"
    >
      <h3 className="text-xl font-semibold tracking-wide text-white">
        {title}
      </h3>
      <time className="text-xs tracking-wide uppercase dark:text-gray-600">
        {year}
      </time>
      <p className="mt-3 text-gray-300">{text}</p>
    </motion.div>
  );
}
