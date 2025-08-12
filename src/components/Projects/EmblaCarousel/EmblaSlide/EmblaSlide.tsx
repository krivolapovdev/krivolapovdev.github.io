type EmblaSlideProps = {
  title: string;
  emoji: string;
  description: string;
  href: string;
};

export function EmblaSlide({
  title,
  emoji,
  description,
  href
}: Readonly<EmblaSlideProps>) {
  return (
    <div className="embla__slide relative">
      <div className="embla__slide__number flex flex-col text-center">
        <h1 className="text-lg font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {emoji}
          {title}
        </h1>
        <p className="text-xs pt-2 font-light text-gray-300 sm:text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="absolute bottom-4 left-8">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-gray-300 transition hover:bg-zinc-700"
          aria-label="View project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <title id="linkTitle">Link icon</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line
              x1="10"
              y1="14"
              x2="21"
              y2="3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
