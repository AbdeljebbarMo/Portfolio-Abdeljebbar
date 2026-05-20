import { motion } from 'framer-motion';
import { HiOutlineBriefcase, HiOutlineLocationMarker } from 'react-icons/hi';
import { experiences } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-10 py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="md:col-span-3">
            <p className="label mb-4">03 / Expérience</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-text text-4xl md:text-6xl">
              Parcours <em className="italic text-accent">professionnel</em>.
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Ligne verticale timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-line" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative grid md:grid-cols-2 gap-8 items-start"
              >
                {/* Point sur la timeline */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 z-10"
                     style={{ borderColor: 'var(--bg)' }} />

                {/* Période (alternance gauche/droite sur desktop) */}
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
                    {exp.period}
                  </p>
                  <p className="font-mono text-xs text-muted inline-flex items-center gap-1">
                    <HiOutlineLocationMarker /> {exp.location}
                  </p>
                </div>

                {/* Card */}
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'}`}>
                  <div
                    className="p-6 md:p-8 border border-line rounded-2xl hover:border-fg transition-colors"
                    style={{ backgroundColor: 'var(--surface)' }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <HiOutlineBriefcase className="text-accent mt-1 flex-shrink-0" size={22} />
                      <div>
                        <p className="font-serif text-2xl mb-1">{exp.company}</p>
                        <p className="font-mono text-xs uppercase tracking-wider text-muted">{exp.role}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-muted">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex gap-2 text-sm leading-relaxed">
                          <span className="text-accent flex-shrink-0">→</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
