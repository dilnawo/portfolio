
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Palette,
  Lightbulb,
  Sparkles,
} from "lucide-react";

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building modern and responsive web applications using current web technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating clean, attractive and user-friendly digital experiences.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "Exploring ideas and solving problems through technology and creativity.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0714]
      px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-20
        h-80 w-80 rounded-full bg-purple-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
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
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400
              to-fuchsia-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20
            rounded-full bg-purple-500" />
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-6 text-2xl font-semibold
              text-purple-300">
              Hello! I'm Dilki Nawodya
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              I'm an Information Technology and Management
              undergraduate at the University of Moratuwa,
              passionate about technology, design and
              creative problem-solving.
            </p>

            <p className="mb-8 leading-8 text-gray-400">
              I enjoy exploring web development, UI/UX design
              and innovative technologies. I love turning
              ideas into meaningful digital experiences while
              continuously learning and improving my skills.
            </p>

            {/* Education Card */}
            <div className="flex items-start gap-4 rounded-2xl
              border border-purple-400/20 bg-[#160d27]/70 p-5
              transition hover:border-purple-400/50">

              <div className="rounded-xl bg-purple-500/15
                p-3 text-purple-300">
                <GraduationCap size={28} />
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  University of Moratuwa
                </h4>

                <p className="mt-1 text-sm text-gray-400">
                  BSc (Hons) in Information Technology
                  & Management
                </p>

                <p className="mt-2 text-sm text-purple-400">
                  Undergraduate
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interests Cards */}
          <div className="grid gap-5">
            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="group flex gap-5 rounded-2xl
                    border border-purple-400/20
                    bg-[#160d27]/70 p-6
                    transition duration-300
                    hover:-translate-y-1
                    hover:border-purple-400/50
                    hover:shadow-lg
                    hover:shadow-purple-900/20"
                >
                  <div className="flex h-14 w-14 shrink-0
                    items-center justify-center rounded-xl
                    bg-purple-500/15 text-purple-300
                    transition group-hover:bg-purple-600
                    group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <div>
                    <h4 className="mb-2 text-lg font-semibold
                      text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
