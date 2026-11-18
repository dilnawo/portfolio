
import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Database,
  Palette,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Languages I use to build software and applications.",
    skills: ["C", "JavaScript", "TypeScript", "PHP"],
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend & Database",
    description: "Working with server-side technologies and data.",
    skills: ["Node.js", "PHP", "MySQL"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing attractive and user-friendly experiences.",
    skills: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    description: "Tools I use for development and collaboration.",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0b0714]
      px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3
        h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 flex items-center justify-center
            gap-2 text-sm tracking-[0.25em] text-purple-400">
            <Sparkles size={17} />
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400
              to-fuchsia-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7
            text-gray-400">
            Technologies and tools I explore and use
            to bring creative ideas to life.
          </p>

          <div className="mx-auto mt-6 h-1 w-20
            rounded-full bg-purple-500" />
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2
          lg:grid-cols-3">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border
                  border-purple-400/20 bg-[#160d27]/70 p-7
                  transition duration-300
                  hover:-translate-y-2
                  hover:border-purple-400/50
                  hover:shadow-xl
                  hover:shadow-purple-900/20"
              >
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14
                  items-center justify-center rounded-xl
                  bg-purple-500/15 text-purple-300
                  transition duration-300
                  group-hover:bg-purple-600
                  group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold
                  text-white">
                  {category.title}
                </h3>

                <p className="mb-6 text-sm leading-6
                  text-gray-400">
                  {category.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border
                        border-purple-400/20
                        bg-purple-500/10 px-3 py-2
                        text-sm text-purple-200
                        transition hover:border-purple-400/60
                        hover:bg-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;
