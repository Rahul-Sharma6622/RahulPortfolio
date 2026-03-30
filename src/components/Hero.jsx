import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, Terminal } from "lucide-react";
import profileImage from "../assets/Rahul.jpeg";

const roles = [
  ".NET Developer",
  "ASP.NET Core Engineer",
  "Full Stack Developer",
  "C# Enthusiast",
];

function Typewriter({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (charIdx > 0) {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span>
      <span className="text-neon-green">{display}</span>
      <span className="type-cursor" />
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16"
    >
      {/* Decorative corner brackets */}
      <div className="absolute top-28 left-6 w-8 h-8 border-t-2 border-l-2 border-neon-green/30" />
      <div className="absolute top-28 right-6 w-8 h-8 border-t-2 border-r-2 border-neon-green/30" />
      <div className="absolute bottom-16 left-6 w-8 h-8 border-b-2 border-l-2 border-neon-green/30" />
      <div className="absolute bottom-16 right-6 w-8 h-8 border-b-2 border-r-2 border-neon-green/30" />

      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Terminal label */}
            <motion.div variants={item} className="flex items-center gap-2">
              <Terminal size={14} className="text-neon-green" />
              <span className="font-mono text-sm text-neon-green/70">
                ~/portfolio
              </span>
              <span className="font-mono text-xs text-slate-600 ml-2">
                [node: v20.x] [npm: v10.x]
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={item}
              className="font-mono text-slate-500 text-sm md:text-base terminal-prompt"
            >
              Hello, World! I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-mono font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              <span className="text-white">Rahul</span>
              <br />
               className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #00FF9C 0%, #2D9CDB 50%, #9B59FF 100%)",
                }}
              >
                Sharma
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              variants={item}
              className="font-mono text-xl md:text-2xl text-slate-400"
            >
              <Typewriter texts={roles} />
            </motion.div>

            {/* Bio snippet */}
            <motion.p
              variants={item}
              className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-sans"
            >
              Final-year B.Tech CS student @ Subharti Institute, Meerut.
              Building scalable web apps with{" "}
              <span className="text-neon-blue font-semibold">ASP.NET Core</span>
              , <span className="text-neon-green font-semibold">C#</span>, and{" "}
              <span className="text-neon-pink font-semibold">SQL Server</span>.
              Turning complex problems into elegant, performant solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>
              <a
                href="mailto:officialrahulsharma1875@gmail.com"
                className="font-mono text-sm px-6 py-3 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={item}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:officialrahulsharma1875@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  data-hover
                  className="flex items-center gap-2 text-slate-500 hover:text-neon-green transition-all duration-200 group"
                >
                  <Icon
                    size={18}
                    className="group-hover:drop-shadow-[0_0_8px_#00FF9C] transition-all"
                  />
                  <span className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {label}
                  </span>
                </a>
              ))}
              <div className="h-px flex-1 max-w-24 bg-linear-to-r from-neon-green/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right image column */}
          <motion.div variants={item} className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-sm rounded-full bg-white/5 p-2 backdrop-blur-xl">
              <img
                src={profileImage}
                alt="Rahul Sharma"
                className="w-full h-auto rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>{" "}
        {/* end of grid */}
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-sm"
        >
          {[
            { value: "7.70", label: "CGPA", suffix: "*" },
            { value: "2+", label: "Projects" },
            { value: "2", label: "Certifications" },
          ].map(({ value, label, suffix }) => (
            <div key={label} className="text-center">
              <div className="font-mono text-2xl font-bold text-neon-green">
                {value}
                {suffix && <span className="text-sm opacity-60">{suffix}</span>}
              </div>
              <div className="font-sans text-xs text-slate-600 mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-linear-to-b from-neon-green/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
