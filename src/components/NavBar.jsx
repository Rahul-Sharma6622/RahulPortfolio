import React from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg-secondary/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-sm text-slate-300">
        <a
          href="#hero"
          className="font-bold tracking-wide text-neon-green hover:text-neon-green/90"
        >
          Rahul Sharma
        </a>
        <div className="hidden gap-4 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1 transition duration-200 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
