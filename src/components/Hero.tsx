
import { motion } from "framer-motion";
import profile from "../assets/profile-transparent.png";

import {
  ArrowUpRight,
  Download,
  BriefcaseBusiness,
  Mail,
  Code2,
  Cpu,
  Laptop,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center
      overflow-hidden bg-[#0b0714] px-6 pt-28 pb-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2
      top-1/2 h-[500px] w-[500px] -translate-x-1/2
      -translate-y-1/2 rounded-full bg-purple-700/10
      blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl
      items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-5 flex items-center gap-3
          text-sm tracking-widest text-purple-400">
            <Sparkles size={18} />
            WELCOME TO MY DIGITAL WORLD
          </p>

          <h1 className="text-5xl font-bold leading-tight
          text-white md:text-7xl">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r
            from-purple-400 via-fuchsia-400 to-purple-300
            bg-clip-text text-transparent">
              Dilki Nawodya
            </span>
          </h1>

          <p className="mt-5 text-lg font-medium
          text-gray-300">
            IT Undergraduate
            <span className="mx-3 text-purple-400">|</span>
            Developer
          </p>

          <p className="mt-6 max-w-lg leading-8
          text-gray-400">
            I blend technology, design and creativity
            to build meaningful, user-centric and
            innovative digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full
              bg-purple-600 px-7 py-3.5 font-semibold
              text-white shadow-lg shadow-purple-600/30
              transition hover:bg-purple-500"
            >
              Explore My Work
              <ArrowUpRight size={19} />
            </a>

            <a
              href="/Dilki-CV.pdf"
              download
              className="flex items-center gap-2 rounded-full
              border border-purple-400/50 px-7 py-3.5
              text-white transition hover:bg-purple-500/10"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-9 flex gap-5">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-purple-400/30
              p-3 text-purple-300 transition hover:bg-purple-600"
            >
              <Code2 size={21} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-purple-400/30
              p-3 text-purple-300 transition hover:bg-purple-600"
            >
              <BriefcaseBusiness size={21} />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="rounded-full border border-purple-400/30
              p-3 text-purple-300 transition hover:bg-purple-600"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        {/* Right Content - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative mx-auto flex aspect-square
          w-full max-w-md items-center justify-center"
        >
          {/* Outer orbit */}
          <div className="absolute inset-5 rounded-full
          border border-dashed border-purple-400/30" />

          {/* Inner orbit */}
          <div className="absolute inset-12 rounded-full
          border border-purple-400/30
          shadow-[0_0_80px_rgba(168,85,247,0.15)]" />

          {/* Purple glow */}
          <div className="absolute h-80 w-80 rounded-full
          bg-purple-600/20 blur-[90px]" />

          {/* Profile photo */}
         <div className="relative z-10 flex items-end justify-center
  transition duration-500 hover:scale-105
  drop-shadow-[0_0_35px_rgba(168,85,247,0.25)]">

            <img
              src={profile}
              alt="Dilki Nawodya - IT Undergraduate and Developer"
              className="h-[360px] w-[280px] object-cover
              object-top"
            />

          </div>

          {/* Floating Code Icon */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute right-2 top-12 z-20
            rounded-2xl border border-purple-400/30
            bg-[#1b1230] p-4 text-purple-300
            shadow-xl shadow-purple-500/20"
          >
            <Code2 size={30} />
          </motion.div>

          {/* Floating CPU Icon */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-16 left-0 z-20
            rounded-2xl border border-purple-400/30
            bg-[#1b1230] p-4 text-purple-300
            shadow-xl shadow-purple-500/20"
          >
            <Cpu size={30} />
          </motion.div>

          {/* Floating Laptop Icon */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute bottom-10 right-2 z-20
            rounded-2xl border border-purple-400/30
            bg-[#1b1230] p-4 text-purple-300
            shadow-xl shadow-purple-500/20"
          >
            <Laptop size={30} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
