"use client";

import Card from "@/components/ui/Card";
import ImageButton from "@/components/ui/ImageButton";
import ListItem from "@/components/ui/ListItem";
import { languages } from "@/constants/languages";
import { projects } from "@/constants/projects";
import { technologies } from "@/constants/technologies";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#282828]">
      <main className="max-w-5xl mx-auto py-4 md:py-6 px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#ebdbb2] rounded-full border-4 border-[#ebdbb2]">
              <Image
                src="/profile.png"
                alt="Evan Baron"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#ebdbb2] mb-4 text2">
              Hello, I am Evan Baron
            </h1>
            <div className="flex justify-center md:justify-start gap-4">
              <ImageButton
                link="https://github.com/evanbaron"
                src="/icons/github.svg"
                alt="Github"
              />
              <ImageButton
                link="https://linkedin.com/in/evan-baron-89ba57302"
                src="/icons/linkedin.svg"
                alt="Linked In"
              />
              <ImageButton
                link="mailto:evanbaron.a4@gmail.com"
                src="/icons/mail.svg"
                alt="Email"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-[#a89984] mb-6 text-center md:text-left text1">
            Currently a student at{" "}
            <a className="underline" href="https://www.epita.fr/">
              EPITA
            </a>
            , my goal is to become an engineer. I specialize in web development
            and building modern applications.
          </p>
        </motion.div>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-[#ebdbb2] mb-3 text1">
            Technologies I Work With
          </h2>
          <ul className="flex flex-wrap gap-4 text-[#ebdbb2] text1">
            {technologies.map((tech, index) => (
              <ListItem
                key={index}
                src={tech.src}
                alt={tech.alt}
                text={tech.name}
              />
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-[#ebdbb2] mb-3 text1">
            Programming Languages I use
          </h2>
          <ul className="flex flex-wrap gap-4 text-[#ebdbb2] text1">
            {languages.map((lang, index) => (
              <ListItem
                key={index}
                src={lang.src}
                alt={lang.alt}
                text={lang.name}
              />
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-2"
        >
          <h2 className="text-2xl font-semibold text-[#ebdbb2] mb-3 text1">
            My Projects
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                src={project.src}
                link={project.link}
              />
            ))}
          </ul>
        </motion.section>
      </main>
      <footer className="text-center text-[#a89984] py-4 mt-8 text1">
        Made using my beloved Gruvbox theme
      </footer>
    </div>
  );
}
