export function Footer() {
  return (
    <footer className="mx-auto w-2/3 pb-5 max-md:w-full">
      <hr className="mb-4 w-full border-gray-400" />
      <div className="flex justify-between max-md:justify-center">
        <span className="text-sm dark:text-gray-400">
          @2025 | Krivolapov Vladislav
        </span>
        <span className="text-sm max-md:hidden dark:text-gray-400">
          Made with React + Vite + Tailwind = ❤️
        </span>
      </div>
    </footer>
  );
}
