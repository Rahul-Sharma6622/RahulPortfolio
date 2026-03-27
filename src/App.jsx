import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    let mouseX = 0,
      mouseY = 0;
    let ringX = 0,
      ringY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const hover = () => cursor.classList.add("cursor-hover");
    const unhover = () => cursor.classList.remove("cursor-hover");

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", hover);
      el.addEventListener("mouseleave", unhover);
    });

    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-slate-200 overflow-x-hidden">
      {/* Atmospheric effects */}
      <div className="noise-overlay" />
      <div className="scanlines" />

      {/* Background grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,156,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,156,0.025) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="glow-orb fixed w-[600px] h-[600px] opacity-10"
        style={{
          background: "#00FF9C",
          top: "-200px",
          right: "-200px",
          zIndex: 0,
        }}
      />
      <div
        className="glow-orb fixed w-[400px] h-[400px] opacity-8"
        style={{
          background: "#FF2D78",
          bottom: "20%",
          left: "-150px",
          zIndex: 0,
        }}
      />
      <div
        className="glow-orb fixed w-[300px] h-[300px] opacity-6"
        style={{ background: "#2D9CDB", top: "40%", right: "10%", zIndex: 0 }}
      />

      <CustomCursor />

      <div className="relative z-10">
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
