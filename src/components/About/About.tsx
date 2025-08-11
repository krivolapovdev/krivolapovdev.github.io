import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { TimelineStep } from "@/components/About/TimelineStep";

export function About() {
  const { t } = useTranslation();

  const steps = useMemo(
    () => [
      {
        year: 1998,
        title: t("about.steps.born.title"),
        text: t("about.steps.born.text")
      },
      {
        year: 2005,
        title: t("about.steps.school.title"),
        text: t("about.steps.school.text")
      },
      {
        year: 2014,
        title: t("about.steps.college.title"),
        text: t("about.steps.college.text")
      },
      {
        year: 2017,
        title: t("about.steps.university.title"),
        text: t("about.steps.university.text")
      },
      {
        year: 2022,
        title: t("about.steps.programming.title"),
        text: t("about.steps.programming.text")
      }
    ],
    [t]
  );

  return (
    <section
      id="about"
      className="flex min-h-[80vh] items-center justify-center"
    >
      <div className="mx-4 grid gap-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
          <div className="mb-14 text-center before:mx-auto before:mb-5 before:block before:h-3 before:w-24 before:rounded-md sm:text-left sm:before:mx-0 before:dark:bg-violet-600">
            <h3 className="text-3xl font-semibold text-white">
              {t("about.about")}
            </h3>
          </div>
        </div>
        <div className="relative col-span-12 space-y-6 px-4 sm:col-span-9">
          <div className="relative col-span-12 space-y-12 px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:-left-3 sm:before:w-0.5 before:dark:bg-gray-300">
            {steps.map(step => (
              <TimelineStep
                key={step.year}
                {...step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
