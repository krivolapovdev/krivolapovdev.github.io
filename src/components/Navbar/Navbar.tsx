import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "@/assets/images/logo.svg";
import { LanguageButton } from "@/components/Navbar/LanguageButton";
import { LanguageModal } from "@/components/Navbar/LanguageModal";
import { NavbarItem } from "@/components/Navbar/NavbarItem";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const background = scrolled ? "bg-background/80" : "bg-black/80";

  const NAVBAR_ITEMS = useMemo(
    () => [
      { label: t("navbar.items.home"), href: "#home" },
      { label: t("navbar.items.about"), href: "#about" },
      { label: t("navbar.items.skills"), href: "#skills" },
      { label: t("navbar.items.projects"), href: "#projects" },
      { label: t("navbar.items.contact"), href: "#contact" }
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Small screen language select */}
      <div className="absolute top-4 right-4 z-50 sm:hidden">
        <LanguageButton onClick={() => setModalOpen(true)} />
      </div>

      {/* Language modal */}
      {modalOpen && <LanguageModal onClose={() => setModalOpen(false)} />}

      {/* Medium and large screens */}
      <header
        className={`fixed inset-x-0 top-4 z-40 mx-auto h-[60px] w-full max-w-screen-lg rounded-3xl px-5 shadow-sm backdrop-blur-[10px] transition-colors duration-300 ${background} max-sm:hidden`}
      >
        <div className="mx-auto flex h-[60px] w-full items-center justify-between">
          <img
            src={Logo}
            alt="Logo"
            width="40"
            height="40"
          />
          <nav className="flex items-center space-x-3">
            <ul className="flex space-x-2">
              {NAVBAR_ITEMS.map(({ href, label }) => (
                <NavbarItem
                  key={href}
                  label={label}
                  href={href}
                />
              ))}
            </ul>
          </nav>
          <LanguageButton onClick={() => setModalOpen(true)} />
        </div>
      </header>
    </>
  );
}
