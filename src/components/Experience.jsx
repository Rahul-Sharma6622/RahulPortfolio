import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    role: 'Python Intern',
    company: 'TPS Empire Services Pvt. Ltd.',
    location: 'Lucknow, India',
    period: 'June 2023 – July 2023',
    type: 'Internship',
    color: '#00FF9C',
    highlights: [
      'Worked on project-based assignments using Python to solve real-world business problems.',
      'Applied debugging techniques, logical thinking, and structured problem-solving approaches.',
      'Collaborated in a professional team environment, gaining exposure to industry workflows.',
    ],
    tech: ['Python', 'Debugging', 'Problem Solving'],
  },
]

const education = [
  {
    degree: 'B.Tech – Computer Science',
    institution: 'Subharti Institute of Technology and Engineering',
    location: 'Meerut, UP',
    period: '2022 – 2026',
    grade: 'CGPA: 7.70*',
    color: '#2D9CDB',
    highlights: [
      'Specializing in .NET development, web technologies, and database management.',
      'NPTEL certified in DSA (Java) and Cloud Computing from IIT Kharagpur.',
      'Built end-to-end web applications as part of coursework and self-driven projects.',
    ],
  },
]

function TimelineItem({ item, index, isLast, type }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const color = item.color

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 pb-10"
    >
      {/* Connector line */}
      {!isLast && (
        <div
          className="absolute left-[19px] top-10 bottom-0 w-px"
          style={{
            background: `linear-gradient(to bottom, ${color}40, transparent)`,
          }}
        />
      )}

      {/* Timeline dot */}
      <div className="relative flex-shrink-0 mt-1">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: `${color}15`,
            border: `1px solid ${color}40`,
            boxShadow: `0 0 14px ${color}30`,
          }}
        >
          <Briefcase size={16} style={{ color }} />
        </div>
        {/* Pulse ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            border: `1px solid ${color}`,
            opacity: 0.3,
          }}
        />
      </div>

      {/* Content card */}
      <div className="flex-1 glass-card holo-card p-6">
        {/* Top meta */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="font-mono text-xs px-2 py-0.5 rounded-full"
                style={{
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                  color,
                }}
              >
                {item.type || 'Education'}
              </span>
            </div>
            <h3 className="text-white font-bold text-lg">
              {item.role || item.degree}
            </h3>
            <p style={{ color }} className="font-semibold text-sm mt-0.5">
              {item.company || item.institution}
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 text-slate-500 text-xs font-mono mb-1">
              <Calendar size={12} />
              {item.period}
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 text-xs">
              <MapPin size={12} />
              {item.location}
            </div>
            {item.grade && (
              <div
                className="mt-1 font-mono text-xs font-bold"
                style={{ color }}
              >
                {item.grade}
              </div>
            )}
          </div>
        </div>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {item.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-slate-400 text-sm">
              <span style={{ color }} className="mt-1 flex-shrink-0 text-xs">▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        {item.tech && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
            {item.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-0.5 rounded"
                style={{
                  background: `${color}0D`,
                  border: `1px solid ${color}20`,
                  color,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-green text-sm mb-2">// 04. my journey</p>
          <h2 className="section-title text-white">
            Experience &<span className="neon-text"> Education</span>
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        {/* Work Experience */}
        <div className="mb-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-neon-green text-xs uppercase tracking-widest mb-8 flex items-center gap-3"
          >
            Work Experience
            <span className="flex-1 h-px bg-gradient-to-r from-neon-green/20 to-transparent" />
          </motion.h3>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.role}
              item={exp}
              index={i}
              isLast={i === experiences.length - 1}
              type="work"
            />
          ))}
        </div>

        {/* Education */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-neon-blue text-xs uppercase tracking-widest mb-8 flex items-center gap-3"
          >
            Academic Background
            <span className="flex-1 h-px bg-gradient-to-r from-neon-blue/20 to-transparent" />
          </motion.h3>
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.degree}
              item={edu}
              index={i}
              isLast={i === education.length - 1}
              type="education"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
