import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import Call from "@/assets/images/call.svg";
import Github from "@/assets/images/github.svg";
import Gmail from "@/assets/images/gmail.svg";
import Telegram from "@/assets/images/telegram.svg";
import { ContactItem } from "@/components/Contact/ContactItem";
import {
  EMAIL_URL,
  GITHUB_PROFILE_URL,
  TELEGRAM_PROFILE_URL
} from "@/data/info";

const ContactItems = [
  {
    href: GITHUB_PROFILE_URL,
    alt: "Github",
    icon: Github,
    border: "#90A4AE",
    bg: "#ECEFF1"
  },
  {
    href: EMAIL_URL,
    alt: "Gmail",
    icon: Gmail,
    border: "#a5b2ab",
    bg: "#ecfff5"
  },
  {
    href: TELEGRAM_PROFILE_URL,
    alt: "Telegram",
    icon: Telegram,
    border: "#2a7faa",
    bg: "#c8eaf7"
  }
];

export function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <motion.div
        className="z-1 mx-auto max-w-4xl space-y-4 px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-3 flex items-center justify-center text-center text-4xl leading-tight font-bold text-white max-sm:text-xl">
          {t("contact.heading_start")}
          <span className="mx-2 inline-flex items-center rounded-full bg-[#ceead6] px-6 py-1 font-semibold text-[#188038]">
            <img
              src={Call}
              alt=""
              className="z-[1] m-0 mr-1 ml-[-5px] h-[35px] w-[35px] p-0"
            />
            {t("contact.heading_highlight")}{" "}
          </span>
          {t("contact.heading_end")}
        </h1>
        <p className="mb-8 text-xl text-gray-300 max-sm:text-sm">
          {t("contact.description")}
        </p>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {ContactItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ContactItem {...item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
