import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import Docker from "@/assets/images/docker.svg";
import Electron from "@/assets/images/electron.svg";
import Flyway from "@/assets/images/flyway.svg";
import Git from "@/assets/images/git.svg";
import GithubActions from "@/assets/images/github-actions.svg";
import Gradle from "@/assets/images/gradle.svg";
import Grafana from "@/assets/images/grafana.svg";
import Java from "@/assets/images/java.svg";
import Junit from "@/assets/images/junit.svg";
import Kafka from "@/assets/images/kafka.svg";
import Kubernetes from "@/assets/images/kubernetes.svg";
import Linux from "@/assets/images/linux.svg";
import Lombok from "@/assets/images/lombok.svg";
import Maven from "@/assets/images/maven.svg";
import Nginx from "@/assets/images/nginx.svg";
import Nodejs from "@/assets/images/nodejs.svg";
import Npm from "@/assets/images/npm.svg";
import Postgresql from "@/assets/images/postgresql.svg";
import Postman from "@/assets/images/postman.svg";
import ReactIcon from "@/assets/images/react.svg";
import Redis from "@/assets/images/redis.svg";
import SpringBoot from "@/assets/images/spring-boot.svg";
import SpringCloud from "@/assets/images/spring-cloud.svg";
import SpringData from "@/assets/images/spring-data.svg";
import SpringFramework from "@/assets/images/spring-framework.svg";
import SpringSecurity from "@/assets/images/spring-security.svg";
import SpringSwagger from "@/assets/images/spring-swagger.svg";
import Tailwindcss from "@/assets/images/tailwindcss.svg";
import Tauri from "@/assets/images/tauri.svg";
import Typescript from "@/assets/images/typescript.svg";
import { SkillItem } from "@/components/Skills/SkillItem";

const skillItems = [
  { href: "https://www.docker.com/", text: "Docker", imageSrc: Docker },
  { href: "https://www.electronjs.org/", text: "Electron", imageSrc: Electron },
  { href: "https://flywaydb.org/", text: "Flyway", imageSrc: Flyway },
  { href: "https://git-scm.com/", text: "Git", imageSrc: Git },
  {
    href: "https://github.com/features/actions",
    text: "GitHub Actions",
    imageSrc: GithubActions
  },
  { href: "https://gradle.org/", text: "Gradle", imageSrc: Gradle },
  { href: "https://grafana.com/", text: "Grafana", imageSrc: Grafana },
  { href: "https://www.java.com/", text: "Java", imageSrc: Java },
  { href: "https://junit.org/", text: "JUnit", imageSrc: Junit },
  { href: "https://kafka.apache.org/", text: "Kafka", imageSrc: Kafka },
  { href: "https://kubernetes.io/", text: "Kubernetes", imageSrc: Kubernetes },
  { href: "https://www.linux.org/", text: "Linux", imageSrc: Linux },
  { href: "https://maven.apache.org/", text: "Maven", imageSrc: Maven },
  { href: "https://projectlombok.org/", text: "Lombok", imageSrc: Lombok },
  { href: "https://nginx.org/", text: "Nginx", imageSrc: Nginx },
  { href: "https://nodejs.org/", text: "Node.js", imageSrc: Nodejs },
  { href: "https://www.npmjs.com/", text: "npm", imageSrc: Npm },
  {
    href: "https://www.postgresql.org/",
    text: "PostgreSQL",
    imageSrc: Postgresql
  },
  { href: "https://www.postman.com/", text: "Postman", imageSrc: Postman },
  { href: "https://react.dev/", text: "React", imageSrc: ReactIcon },
  { href: "https://redis.io/", text: "Redis", imageSrc: Redis },
  {
    href: "https://spring.io/projects/spring-boot",
    text: "Spring Boot",
    imageSrc: SpringBoot
  },
  {
    href: "https://spring.io/projects/spring-cloud",
    text: "Spring Cloud",
    imageSrc: SpringCloud
  },
  {
    href: "https://spring.io/projects/spring-data",
    text: "Spring Data",
    imageSrc: SpringData
  },
  {
    href: "https://spring.io/projects/spring-framework",
    text: "Spring Framework",
    imageSrc: SpringFramework
  },
  {
    href: "https://spring.io/projects/spring-security",
    text: "Spring Security",
    imageSrc: SpringSecurity
  },
  {
    href: "https://springdoc.org/",
    text: "Spring Swagger",
    imageSrc: SpringSwagger
  },
  {
    href: "https://tailwindcss.com/",
    text: "Tailwind CSS",
    imageSrc: Tailwindcss
  },
  { href: "https://tauri.app/", text: "Tauri", imageSrc: Tauri },
  {
    href: "https://www.typescriptlang.org/",
    text: "TypeScript",
    imageSrc: Typescript
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function Skills() {
  const { t } = useTranslation();
  const shuffledItems = useMemo(() => shuffleArray(skillItems), []);

  return (
    <section
      id="skills"
      className="flex min-h-[100vh] flex-wrap content-center items-center justify-center max-sm:mt-5"
    >
      <div className="mb-8 w-full text-center">
        <h2 className="text-5xl font-bold text-white">{t("skills.skills")}</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center space-x-2 text-center">
        {shuffledItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.035, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillItem {...item} />
          </motion.div>
        ))}
      </div>
      <p className="text-center text-white">{t("skills.and_many_others")}</p>
    </section>
  );
}
