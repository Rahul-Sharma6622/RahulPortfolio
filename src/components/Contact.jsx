import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const socials = [
  { icon: Mail, label: 'Email', value: 'officialrahulsharma1875@gmail.com', href: 'mailto:officialrahulsharma1875@gmail.com', color: '#00FF9C' },
  { icon: Phone, label: 'Phone', value: '+91 6299918875', href: 'tel:+916299918875', color: '#2D9CDB' },
  { icon: MapPin, label: 'Location', value: 'Meerut, Uttar Pradesh, India', href: '#', color: '#FF2D78' },
  { icon: Github, label: 'GitHub', value: 'github.com/rahulsharma', href: 'https://github.com', color: '#9B59FF' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/rahulsharma', href: 'https://linkedin.com', color: '#2D9CDB' },
]

function Input({ label, name, type = 'text', as: As = 'input', ...props }) {
  return (
    <div className="space-y-1.5">
      <label className="font-mono text-xs text-slate-500 uppercase tracking-wider block">
        {label}
      </label>
      <As
        name={name}
        type={type}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-200 text-sm font-sans
          placeholder:text-slate-700 focus:outline-none focus:border-neon-green/50 focus:bg-white/8
          focus:shadow-[0_0_20px_rgba(0,255,156,0.1)] transition-all duration-300 resize-none"
        {...props}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [titleRef, titleInView] = useInView({ triggerOnce: true })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailTo = `mailto:officialrahulsharma1875@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailTo
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, x: -20 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-neon-green text-sm mb-2">// 05. let's connect</p>
          <h2 className="section-title text-white">
            Get In<span className="neon-text"> Touch</span>
          </h2>
          <div className="section-divider mt-4 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Let's Build Together</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively looking for entry-level opportunities and internships. Whether
                you have a project in mind, want to collaborate, or just say hello — my
                inbox is always open.
              </p>
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-3 glass-card p-4">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-neon-green" />
                <div className="absolute inset-0 rounded-full bg-neon-green animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Open to Opportunities</p>
                <p className="text-slate-500 text-xs">Available for full-time & internships</p>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-hover
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 group p-3 rounded-xl hover:bg-white/3 transition-all duration-200"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={14} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-slate-600">{label}</p>
                    <p className="text-slate-300 text-sm truncate group-hover:text-white transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Your Name"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <Input
                label="Subject"
                name="subject"
                placeholder="Hiring / Collaboration / Just saying hi..."
                value={form.subject}
                onChange={(e) => setForm(f => ({ ...f, subject: e.target.value }))}
              />
              <Input
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-hover
                className="w-full py-3.5 rounded-xl font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, rgba(0,255,156,0.2), rgba(0,255,156,0.1))'
                    : 'linear-gradient(135deg, rgba(0,255,156,0.15), rgba(45,156,219,0.1))',
                  border: `1px solid ${sent ? '#00FF9C' : 'rgba(0,255,156,0.3)'}`,
                  color: '#00FF9C',
                  boxShadow: '0 0 20px rgba(0,255,156,0.15)',
                }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="font-mono text-xs text-slate-700 text-center">
                This will open your email client — or reach me directly at{' '}
                <span className="text-neon-green/60">officialrahulsharma1875@gmail.com</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
