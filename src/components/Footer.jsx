import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 pt-8 pb-6 text-center text-slate-300">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Rahul Sharma. Crafted with React, Vite,
          Tailwind, and a little neon magic.
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Designed to match the same sci-fi glass aesthetic used across the app.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
