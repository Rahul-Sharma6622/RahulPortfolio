import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Employee Management System',
    tagline: 'Full-stack .NET CRUD application',
    description:
      'A comprehensive Employee Management System built with ASP.NET Core MVC and C#. Features complete CRUD operations for employee records, integrated SQL Server database management, and Entity Framework for ORM. Designed with clean MVC architecture and SOLID OOP principles for scalability and maintainability.',
    stack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework', 'Bootstrap'],
    highlights: [
      'CRUD: Add, update, view, delete employee records',
      'Entity Framework ORM with SQL Server integration',
      'MVC architecture + OOP principles',
      'Clean, maintainable, and scalable codebase',
    ],
    github: 'https://github.com',
    live: '#',
    color: '#00FF9C',
    icon: '⚙️',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Web Application',
    tagline: 'Online shopping platform with full backend',
    description:
      'A fully functional Online Shopping (E-Commerce) web application using ASP.NET Core MVC and C#. Includes product listing, user authentication (registration & login), and order management. Uses SQL Server and Entity Framework for robust data operations, with a responsive UI for seamless user experience.',
    stack: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'Entity Framework', 'HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Product listing, cart, and order management',
      'User registration & authentication system',
      'SQL Server + Entity Framework for data layer',
      'Responsive, mobile-friendly frontend',
    ],
    github: 'https://github.com',
    live: '#',
    color: '#FF2D78',
    icon: '🛒',
    featured: true,
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card holo-card overflow-hidden group"
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-white font-bold text-xl mt-1 group-hover:text-neon-green transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm mt-0.5">{project.tagline}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-hover
              className="text-slate-500 hover:text-neon-green transition-colors p-1.5 rounded-lg hover:bg-neon-green/5"
            >
              <Github size={18} />
            </a>
            <a
              href={project.live}
              data-hover
              className="text-slate-500 hover:text-neon-pink transition-colors p-1.5 rounded-lg hover:bg-neon-pink/5"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md"
              style={{
                background: `${project.color}0D`,
                border: `1px solid ${project.color}25`,
                color: project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expand/collapse highlights */}
        <button
          onClick={() => setExpanded(!expanded)}
          data-hover
          className="flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Hide' : 'Show'} highlights
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-4 space-y-2 overflow-hidden"
            >
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-slate-400 text-sm">
                  <span style={{ color: project.color }} className="mt-1 flex-shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-green text-sm mb-2">// 03. what i've built</p>
          <h2 className="section-title text-white">
            Featured<span className="neon-text"> Projects</span>
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 font-mono text-sm mb-4">
            More projects on GitHub →
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            data-hover
          >
            <Github size={16} />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  )
}
