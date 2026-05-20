import { motion } from 'framer-motion';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { skills, certifications, languages } from '../data/content';

export default function Skills() {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative px-6 md:px-10 py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16">
          <div className="md:col-span-3">
            <p className="label mb-4">02 / Compétences</p>
          </div>
          <div className="md:col-span-9">
            <h2 className="display-text text-4xl md:text-6xl">
              Stack <em className="italic text-accent">technique</em>.
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="grid md:grid-cols-12 gap-8 pb-8 border-b border-line"
            >
              <div className="md:col-span-3">
                <p className="font-serif text-2xl">{cat}</p>
              </div>
              <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group p-4 border border-line rounded-lg hover:border-fg transition-colors"
                    >
                      <p className="font-medium text-lg mb-1 group-hover:text-accent transition-colors">
                        {skill.name}
                      </p>
                      <p className="font-mono text-xs text-muted uppercase tracking-wider">
                        {skill.level}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-12 gap-8 mb-10">
            <div className="md:col-span-3">
              <p className="label mb-4">Certifications</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="font-serif text-3xl md:text-4xl">
                Formations <em className="italic text-accent">en ligne</em>
              </h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-5 border border-line rounded-lg hover:border-accent transition-colors group"
                style={{ backgroundColor: 'var(--surface)' }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <HiOutlineBadgeCheck className="text-accent mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-serif text-lg leading-tight mb-1">{cert.name}</p>
                    <p className="font-mono text-xs text-muted">{cert.year}</p>
                  </div>
                </div>
                <p className="text-sm text-muted ml-8">
                  <span className="font-medium">{cert.provider}</span> — {cert.instructor}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Langues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid md:grid-cols-12 gap-8"
        >
          <div className="md:col-span-3">
            <p className="label mb-4">Langues</p>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languages.map((lang, i) => (
              <div key={i} className="p-4 border border-line rounded-lg">
                <p className="font-serif text-xl mb-1">{lang.name}</p>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
