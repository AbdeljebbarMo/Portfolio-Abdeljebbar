import { motion } from 'framer-motion';
import { about, formation } from '../data/content';

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-12 gap-8 md:gap-16"
        >
          <div className="md:col-span-3">
            <p className="label mb-4">01 / À propos</p>
            <div className="font-mono text-xs text-muted space-y-1">
              <p>Profil</p>
              <p>Parcours</p>
              <p>Formation</p>
            </div>
          </div>

          <div className="md:col-span-9 space-y-8">
            <h2 className="display-text text-4xl md:text-6xl">
              Développeur web <em className="italic text-accent">passionné</em>, prêt à relever de nouveaux défis.
            </h2>

            <p className="font-serif text-2xl leading-relaxed text-fg">{about.intro}</p>

            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted max-w-2xl">
                {p}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-line">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <p className="display-text text-4xl md:text-6xl mb-2">{stat.value}</p>
                  <p className="label">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Formation */}
            <div className="pt-12">
              <p className="label mb-6">Formation</p>
              <div className="space-y-6">
                {formation.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="grid md:grid-cols-12 gap-2 md:gap-6 pb-6 border-b border-line"
                  >
                    <div className="md:col-span-3 font-mono text-xs text-muted">{f.period}</div>
                    <div className="md:col-span-9">
                      <p className="font-serif text-xl mb-1">{f.title}</p>
                      <p className="text-muted mb-1">{f.field}</p>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider">{f.school}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
