import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react'

function Card({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card holo-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-green text-sm mb-2">// 01. who am i</p>
          <h2 className="section-title text-white">
            About<span className="neon-text"> Me</span>
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main bio — spans 2 cols */}
          <Card className="md:col-span-2" delay={0.1}>
            <div className="flex items-start gap-4">
              {/* Avatar placeholder */}
              <div
                className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border border-neon-green/20"
                style={{ background: 'linear-gradient(135deg, #0D1525 0%, #1a2a45 100%)' }}
              >
                <div className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-bold text-neon-green">
                  RS
                </div>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,156,0.1) 0%, transparent 60%)',
                  }}
                />
              </div>
              <div>
                <h3 className="font-mono text-xl font-bold text-white mb-1">Rahul Sharma</h3>
                <p className="font-mono text-sm text-neon-green mb-3">
                  Final-Year B.Tech · CS · 2026
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A passionate developer building robust, scalable web applications. Specializing in
                  the .NET ecosystem — from crafting RESTful APIs to designing database-driven
                  solutions with SQL Server. I love clean architecture, solid OOP principles, and
                  turning business problems into working code.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-white/3 border border-white/5 font-mono text-sm">
              <span className="text-slate-600">const </span>
              <span className="text-neon-blue">developer</span>
              <span className="text-slate-600"> = </span>
              <span className="text-neon-green">&#123;</span>
              <div className="pl-4 text-slate-400">
                <div>
                  <span className="text-neon-pink">focus</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">"ASP.NET Core + C#"</span>,
                </div>
                <div>
                  <span className="text-neon-pink">goal</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">"Entry-level @ Infosys"</span>,
                </div>
                <div>
                  <span className="text-neon-pink">learning</span>
                  <span className="text-white">: </span>
                  <span className="text-yellow-300">"Always"</span>,
                </div>
              </div>
              <span className="text-neon-green">&#125;</span>
            </div>
          </Card>

          {/* Location card */}
          <Card delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-neon-pink" />
              <span className="font-mono text-sm text-slate-400">Location</span>
            </div>
            <p className="text-white font-semibold text-lg">Meerut, UP</p>
            <p className="text-slate-500 text-sm mt-1">India 🇮🇳</p>
            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="font-mono text-xs text-slate-600 mb-3">Available for</p>
              <div className="flex flex-col gap-2">
                {['Full-time Roles', 'Internships', 'Remote Work'].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    <span className="text-slate-400 text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Education card */}
          <Card delay={0.3}>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={16} className="text-neon-blue" />
              <span className="font-mono text-sm text-slate-400">Education</span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-white font-semibold text-sm">B.Tech — Computer Science</p>
                <p className="text-slate-500 text-xs mt-0.5">Subharti Institute, Meerut</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-mono text-xs text-neon-green">CGPA 7.70</span>
                  <span className="text-slate-600 text-xs">· 2022–2026</span>
                </div>
              </div>
              <div className="border-t border-white/5 pt-3">
                <p className="text-slate-400 text-xs">Class XII — 78%</p>
                <p className="text-slate-600 text-xs">B.P.S College, Bihar · 2020–22</p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <p className="text-slate-400 text-xs">Class X — 78.2%</p>
                <p className="text-slate-600 text-xs">P.H.S Baraibagahawa · 2019–20</p>
              </div>
            </div>
          </Card>

          {/* What I do */}
          <Card className="md:col-span-2" delay={0.35}>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={16} className="text-neon-green" />
              <span className="font-mono text-sm text-slate-400">What I Do</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Backend Development', desc: 'ASP.NET Core MVC, Web API, RESTful services', color: 'neon-green' },
                { title: 'Database Design', desc: 'SQL Server, Entity Framework, CRUD operations', color: 'neon-blue' },
                { title: 'Frontend Integration', desc: 'HTML, CSS, Bootstrap, JS — responsive UIs', color: 'neon-pink' },
                { title: 'Clean Architecture', desc: 'OOPS, MVC patterns, scalable codebases', color: 'purple-400' },
              ].map(({ title, desc, color }) => (
                <div
                  key={title}
                  className="p-3 rounded-xl bg-white/3 border border-white/5 hover:border-white/10 transition-all"
                >
                  <Code2 size={14} className={`text-${color} mb-2`} />
                  <p className="text-white text-sm font-semibold">{title}</p>
                  <p className="text-slate-500 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
