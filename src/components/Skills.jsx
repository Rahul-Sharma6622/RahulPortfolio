import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillGroups = [
  {
    category: 'Languages',
    color: '#00FF9C',
    skills: [
      { name: 'C#', level: 85 },
      { name: 'JavaScript', level: 70 },
      { name: 'Java', level: 65 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Backend',
    color: '#2D9CDB',
    skills: [
      { name: 'ASP.NET Core MVC', level: 85 },
      { name: 'Web API / REST', level: 80 },
      { name: 'Entity Framework', level: 78 },
      { name: 'OOPS & Patterns', level: 82 },
    ],
  },
  {
    category: 'Frontend',
    color: '#FF2D78',
    skills: [
      { name: 'HTML & CSS', level: 80 },
      { name: 'Bootstrap', level: 75 },
      { name: 'JavaScript DOM', level: 65 },
      { name: 'Responsive Design', level: 72 },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#9B59FF',
    skills: [
      { name: 'SQL Server (SSMS)', level: 82 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Postman', level: 70 },
      { name: 'VS Code', level: 85 },
    ],
  },
]

const tags = [
  'C#', 'ASP.NET Core', 'Entity Framework', 'Web API',
  'SQL Server', 'MVC', 'CRUD', 'RESTful APIs', 'OOPS',
  'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Java',
  'Git', 'GitHub', 'Postman', 'VS Code', 'Cloud Computing',
  'Data Structures', 'Problem Solving',
]

function SkillBar({ name, level, color, inView, index }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="font-mono text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-green text-sm mb-2">// 02. tech stack</p>
          <h2 className="section-title text-white">
            Skills &<span className="neon-text"> Technologies</span>
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {skillGroups.map((group, gi) => {
            const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
            return (
              <motion.div
                key={group.category}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 space-y-5"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: group.color, boxShadow: `0 0 6px ${group.color}` }}
                  />
                  <span
                    className="font-mono text-xs uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </span>
                </div>
                {group.skills.map((sk, i) => (
                  <SkillBar
                    key={sk.name}
                    {...sk}
                    color={group.color}
                    inView={inView}
                    index={i}
                  />
                ))}
              </motion.div>
            )
          })}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <p className="font-mono text-xs text-slate-600 mb-4 uppercase tracking-wider">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                className="skill-tag cursor-default"
                data-hover
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            {
              title: 'Data Structures & Algorithms',
              sub: 'NPTEL · IIT Kharagpur',
              lang: 'Java',
              date: 'Jul–Oct 2023',
              color: '#00FF9C',
            },
            {
              title: 'Cloud Computing',
              sub: 'NPTEL · IIT Kharagpur',
              lang: 'Theory',
              date: 'Jan–Apr 2025',
              color: '#2D9CDB',
            },
          ].map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-5 flex items-start gap-4 holo-card"
            >
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                style={{
                  background: `${cert.color}15`,
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                }}
              >
                CERT
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{cert.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{cert.sub}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded"
                    style={{
                      background: `${cert.color}15`,
                      color: cert.color,
                      border: `1px solid ${cert.color}25`,
                    }}
                  >
                    {cert.lang}
                  </span>
                  <span className="text-slate-600 text-xs">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
