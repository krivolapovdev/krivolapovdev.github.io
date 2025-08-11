import { useRef, useState } from "react";

type SkillItemProps = {
  href: string;
  imageSrc: string;
  text: string;
};

export function SkillItem({ href, imageSrc, text }: Readonly<SkillItemProps>) {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!divRef.current || isFocused) {
      return;
    }

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleFocus() {
    setIsFocused(true);
    setOpacity(1);
  }

  function handleBlur() {
    setIsFocused(false);
    setOpacity(0);
  }

  function handleMouseEnter() {
    setOpacity(1);
  }

  function handleMouseLeave() {
    setOpacity(0);
  }

  return (
    <a
      ref={divRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mb-2 flex h-[128px] w-[128px] flex-col items-center justify-center overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition duration-200 hover:border-zinc-500 max-sm:h-[90px] max-sm:w-[90px]"
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.2), transparent 40%)`
        }}
      />
      <img
        src={imageSrc}
        alt={text}
        className="z-1 mb-2 h-10 max-sm:h-7"
      />
      <span className="z-1 text-zinc-200">{text}</span>
    </a>
  );
}
