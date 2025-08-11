import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageModalProps = {
  onClose: () => void;
};

export function LanguageModal({ onClose }: Readonly<LanguageModalProps>) {
  const { i18n } = useTranslation();
  const languages = Object.keys(i18n.services.resourceStore.data);
  const [blurActive, setBlurActive] = useState(false);

  const changeLanguage = (lang: string) => {
    void i18n.changeLanguage(lang);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setBlurActive(true);
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <button
      type="button"
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backdropFilter: blurActive ? "blur(6px)" : "blur(0)",
        WebkitBackdropFilter: blurActive ? "blur(6px)" : "blur(0)",
        transition: "backdrop-filter 0.3s ease-in"
      }}
      onClick={onClose}
    >
      <button
        type="button"
        className="w-[90%] max-w-sm rounded-xl bg-[#111] p-6 shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg text-white">Select Language</h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-xl text-white hover:text-red-400"
          >
            &times;
          </button>
        </div>
        <ul className="space-y-2">
          {languages.map(lang => (
            <li key={lang}>
              <button
                type="button"
                onClick={() => changeLanguage(lang)}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                title={lang}
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      </button>
    </button>
  );
}
