type SocialLinkProps = {
  href: string;
  text: string;
};

export function SocialLink({ href, text }: Readonly<SocialLinkProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white px-4 py-2 text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
    >
      {text}
    </a>
  );
}
