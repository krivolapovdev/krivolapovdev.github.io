type ContactItemProps = {
  href: string;
  alt: string;
  icon: string;
  border: string;
  bg: string;
};

export function ContactItem({
  href,
  alt,
  icon,
  border,
  bg
}: Readonly<ContactItemProps>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={icon}
        alt={alt}
        className={`z-[1] h-[150px] w-[150px] rounded-lg border-2 p-3 transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_white]`}
        style={{ borderColor: border, backgroundColor: bg }}
      />
    </a>
  );
}
