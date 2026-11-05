
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full
      border-b border-white/10 bg-[#0b0714]/80
      backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl
      items-center justify-between px-6 py-5">

        <a href="#home" className="text-3xl font-bold
        tracking-wider text-purple-400">
          DN<span className="text-white">.</span>
        </a>

        <div className="hidden items-center gap-8
        md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-300
              transition duration-300 hover:text-purple-400"
            >
              {link}
            </a>
          ))}
        </div>

        <span className="rounded-full border
        border-purple-400/40 px-4 py-2 text-xs
        text-purple-300">
          AVAILABLE FOR OPPORTUNITIES
        </span>

      </div>
    </motion.nav>
  );
};

export default Navbar;
